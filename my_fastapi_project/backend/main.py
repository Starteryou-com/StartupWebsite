from fastapi import FastAPI
from pymongo import MongoClient
from motor.motor_asyncio import AsyncIOMotorClient

import os

app = FastAPI()


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
    data = await app.mongodb["education"].find_one()
    if data:
        return data
    return {"message": "Data not found"}
