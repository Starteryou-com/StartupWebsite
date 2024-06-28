from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field
from bson import ObjectId
import os

app = FastAPI()

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class ItemModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    item_id: int
    name: str
    description: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class DataModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str
    value: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class CreateDataModel(BaseModel):
    name: str
    value: str

@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient('mongodb://localhost:27017')
    app.mongodb = app.mongodb_client["education"]

@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/")
async def read_root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}", response_model=ItemModel)
async def read_item(item_id: int):
    item = await app.mongodb["items"].find_one({"item_id": item_id})
    if item:
        return item
    raise HTTPException(status_code=404, detail="Item not found")

@app.get("/data", response_model=list[DataModel])
async def get_data():
    data_cursor = app.mongodb["education"].find()
    data_list = await data_cursor.to_list(length=None)  # Get all documents
    if data_list:
        return data_list
    raise HTTPException(status_code=404, detail="Data not found")


@app.post("/data", response_model=DataModel)
async def create_data(data: CreateDataModel):
    new_data = await app.mongodb["education"].insert_one(data.dict())
    created_data = await app.mongodb["education"].find_one({"_id": new_data.inserted_id})
    if created_data:
        return created_data
    raise HTTPException(status_code=400, detail="Data could not be created")
