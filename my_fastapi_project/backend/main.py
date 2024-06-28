from fastapi import FastAPI
from pymongo import MongoClient
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
import os
import uvicorn

app = FastAPI()
# Pydantic model for the data to be inserted


class Starteryou(BaseModel):
    ed_name: str


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)


@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(os.getenv("MONGODB_URI"))
    app.mongodb = app.mongodb_client["education"]


@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()


@app.get("/")
async def read_root():
    return {"message": "Hello World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int):
    item = await app.mongodb["items"].find_one({"item_id": item_id})
    if item:
        return item
    return {"message": "Item not found"}


@app.get("/data")
async def get_data():
    try:
        data = await app.mongodb["education"].find_one()
        if data:
            return data
        else:
            return {"message": "Data not found"}
    except Exception as e:
        print(f"Error retrieving data: {e}")
        return {"message": "Error retrieving data"}


@app.get("/data/{object_id}")
async def get_data_by_id(object_id: str):
    try:
        data = await app.mongodb["education"].find_one({"_id": object_id})
        if data:
            return data
        else:
            return {"message": "Data not found"}
    except Exception as e:
        print(f"Error retrieving data: {e}")
        return {"message": "Error retrieving data"}
