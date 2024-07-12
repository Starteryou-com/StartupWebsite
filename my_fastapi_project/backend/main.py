from typing import List, Optional, Dict, Any
from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field
from bson import ObjectId
import os
import uvicorn
import logging


app = FastAPI()
# Pydantic model for the data to be inserted


class Starteryou(BaseModel):
    _id: str
    ed_name: str


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)


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


MONGODB_URI = os.getenv("mongodb+srv://RohithAndanala:Rohith357@portfolio.crlthkf.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio")


@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(MONGODB_URI)
    app.mongodb = app.mongodb_client["Starteryou"]
    app.mongodb_collection = app.mongodb["education"]


@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()


@app.get("/")
async def read_root():
    return {"message": "Hello World"}


@app.get("/data")
async def get_all_data():
    try:
        cursor = app.mongodb["education"].find({})
        data = await cursor.to_list(length=100)  # Adjust the length as needed
        for item in data:
            item["_id"] = str(item["_id"])  # Convert ObjectId to string
        return data
    except Exception as e:
        logging.error(f"Error retrieving data: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error retrieving data")


@app.post("/data", response_model=dict)
async def create_data(education: Starteryou):
    try:
        education_dict = education.dict()
        result = await app.mongodb["education"].insert_one(education_dict)
        if result.inserted_id:
            education_dict["_id"] = str(result.inserted_id)
            return education_dict
        else:
            raise HTTPException(
                status_code=400, detail="Data insertion failed")
    except Exception as e:
        print(f"Error inserting data: {e}")
        raise HTTPException(status_code=500, detail="Error inserting data")


@app.get("/data/{object_id}", response_model=Starteryou)
async def get_data_by_id(object_id: str):
    try:
        # Convert the string object_id to ObjectId
        obj_id = ObjectId(object_id)
        data = await app.mongodb_collection.find_one({"_id": obj_id})
        if data:
            data["_id"] = str(data["_id"])  # Convert ObjectId to string
            return Starteryou(**data)  # Return as Starteryou model
        else:
            raise HTTPException(status_code=404, detail="Data not found")
    except Exception as e:
        logging.error(f"Error retrieving data: {e}")
        raise HTTPException(status_code=500, detail="Error retrieving data")


@app.put("/data/{object_id}", response_model=Starteryou)
async def update_data(object_id: str, education: Starteryou):
    try:
        # Convert the string object_id to ObjectId
        obj_id = PyObjectId(object_id)
        education_dict = education.dict(exclude_unset=True, by_alias=True)
        result = await app.mongodb_collection.update_one(
            {"_id": obj_id},
            {"$set": education_dict}
        )
        if result.matched_count:
            # Retrieve the updated document to return
            updated_data = await app.mongodb_collection.find_one({"_id": obj_id})
            if updated_data:
                return Starteryou(**updated_data)
        else:
            raise HTTPException(status_code=404, detail="Data not found")
    except Exception as e:
        logging.error(f"Error updating data: {e}")
        raise HTTPException(status_code=500, detail="Error updating data")


@app.delete("/data/{object_id}", response_model=Dict[str, Any])
async def delete_data(object_id: str):
    try:
        # Convert the string object_id to ObjectId
        obj_id = ObjectId(object_id)
        result = await app.mongodb_collection.delete_one({"_id": obj_id})
        if result.deleted_count:
            return {"message": "Data successfully deleted"}
        else:
            raise HTTPException(status_code=404, detail="Data not found")
    except Exception as e:
        logging.error(f"Error deleting data: {e}")
        raise HTTPException(status_code=500, detail="Error deleting data")
