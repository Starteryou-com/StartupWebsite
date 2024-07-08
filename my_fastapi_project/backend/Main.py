from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from bson import ObjectId
import os
import uvicorn
import logging
from passlib.context import CryptContext  # Ensure this import is present


app = FastAPI()
# Pydantic model for the data to be inserted



class Jobs(BaseModel):
    _id: str
    job_title: str
    job_description: str
    job_image: str
    

class Education(BaseModel):
    ßid: str = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    title: str
    description: str
    video_link: str

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class EducationCreate(BaseModel):
    title: str
    description: str
    video_link: str




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


MONGODB_URI = os.getenv("MONGODB_URI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(MONGODB_URI)
    app.mongodb = app.mongodb_client["Starteryou"]
    app.jobs_collection = app.mongodb["jobs"]
    app.education_collection = app.mongodb["education"]


@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()



# CRUD for Jobs page
@app.get("/jobs")
async def get_all_data():
    try:
        cursor = app.mongodb["jobs"].find({})
        data = await cursor.to_list(length=100)  # Adjust the length as needed
        for item in data:
            item["_id"] = str(item["_id"])  # Convert ObjectId to string
        return data
    except Exception as e:
        logging.error(f"Error retrieving data: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error retrieving data")


@app.get("/jobs/{object_id}", response_model=Jobs)
async def get_data_by_id(object_id: str):
    try:
        # Convert the string object_id to ObjectId
        obj_id = ObjectId(object_id)
        data = await app.jobs_collection.find_one({"_id": obj_id})
        if data:
            data["_id"] = str(data["_id"])  # Convert ObjectId to string
            return Jobs(**data)  # Return as Starteryou model
        else:
            raise HTTPException(status_code=404, detail="Data not found")
    except Exception as e:
        logging.error(f"Error retrieving data: {e}")
        raise HTTPException(status_code=500, detail="Error retrieving data")


@app.put("/jobs/{object_id}", response_model=Jobs)
async def update_data(object_id: str, jobs: Jobs):
    try:
        # Convert the string object_id to ObjectId
        obj_id = PyObjectId(object_id)
        jobs_dict = jobs.dict(exclude_unset=True, by_alias=True)
        result = await app.jobs_collection.update_one(
            {"_id": obj_id},
            {"$set": jobs_dict}
        )
        if result.matched_count:
            # Retrieve the updated document to return
            updated_data = await app.jobs_collection.find_one({"_id": obj_id})
            if updated_data:
                return Jobs(**updated_data)
        else:
            raise HTTPException(status_code=404, detail="Data not found")
    except Exception as e:
        logging.error(f"Error updating data: {e}")
        raise HTTPException(status_code=500, detail="Error updating data")


@app.post("/jobs", response_model=dict)
async def create_data(jobs: Jobs):
    try:
        jobs_dict = jobs.dict()
        result = await app.mongodb["jobs"].insert_one(jobs_dict)
        if result.inserted_id:
            jobs_dict["_id"] = str(result.inserted_id)
            return jobs_dict
        else:
            raise HTTPException(
                status_code=400, detail="Data insertion failed")
    except Exception as e:
        print(f"Error inserting data: {e}")
        raise HTTPException(status_code=500, detail="Error inserting data")


@app.delete("/jobs/{object_id}", response_model=Dict[str, Any])
async def delete_data(object_id: str):
    try:
        # Convert the string object_id to ObjectId
        obj_id = ObjectId(object_id)
        result = await app.jobs_collection.delete_one({"_id": obj_id})
        if result.deleted_count:
            return {"message": "Data successfully deleted"}
        else:
            raise HTTPException(status_code=404, detail="Data not found")
    except Exception as e:
        logging.error(f"Error deleting data: {e}")
        raise HTTPException(status_code=500, detail="Error deleting data")
    
    
    
#Education
@app.get("/education")
async def get_all_education():
    try:
        cursor = app.mongodb["education"].find({})
        data = await cursor.to_list(length=100)  # Adjust the length as needed
        for item in data:
            item["_id"] = str(item["_id"])  # Convert ObjectId to string
        return data
    except Exception as e:
        logging.error(f"Error retrieving education data: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error retrieving education data")


@app.get("/education/{object_id}", response_model=Education)
async def get_education_by_id(object_id: str):
    try:
        obj_id = ObjectId(object_id)  # Convert the string object_id to ObjectId
        data = await app.mongodb["education"].find_one({"_id": obj_id})
        if data:
            data["_id"] = str(data["_id"])  # Convert ObjectId to string
            return Education(**data)
        else:
            raise HTTPException(status_code=404, detail="Education data not found")
    except Exception as e:
        logging.error(f"Error retrieving education data: {e}")
        raise HTTPException(status_code=500, detail="Error retrieving education data")


@app.put("/education/{object_id}", response_model=Education)
async def update_education(object_id: str, education: EducationCreate):
    try:
        obj_id = ObjectId(object_id)  # Convert the string object_id to ObjectId
        education_dict = education.dict(exclude_unset=True, by_alias=True)
        result = await app.mongodb["education"].update_one(
            {"_id": obj_id},
            {"$set": education_dict}
        )
        if result.matched_count:
            updated_data = await app.mongodb["education"].find_one({"_id": obj_id})
            if updated_data:
                return Education(**updated_data)
        else:
            raise HTTPException(status_code=404, detail="Education data not found")
    except Exception as e:
        logging.error(f"Error updating education data: {e}")
        raise HTTPException(status_code=500, detail="Error updating education data")


@app.post("/education", response_model=Education)
async def create_education(education: EducationCreate):
    try:
        education_dict = education.dict()
        result = await app.mongodb["education"].insert_one(education_dict)
        if result.inserted_id:
            education_dict["_id"] = str(result.inserted_id)
            return Education(**education_dict)
        else:
            raise HTTPException(
                status_code=400, detail="Education data insertion failed")
    except Exception as e:
        logging.error(f"Error inserting education data: {e}")
        raise HTTPException(status_code=500, detail="Error inserting education data")


@app.delete("/education/{object_id}", response_model=Dict[str, Any])
async def delete_education(object_id: str):
    try:
        obj_id = ObjectId(object_id)  # Convert the string object_id to ObjectId
        result = await app.mongodb["education"].delete_one({"_id": obj_id})
        if result.deleted_count:
            return {"message": "Education data successfully deleted"}
        else:
            raise HTTPException(status_code=404, detail="Education data not found")
    except Exception as e:
        logging.error(f"Error deleting education data: {e}")
        raise HTTPException(status_code=500, detail="Error deleting education data")

# Login&Signin


class User(BaseModel):
    email: str
    password: str
    name: str = None


client = AsyncIOMotorClient(
    'mongodb+srv://bpscrohit:Mongo123@cluster0.rszwkl0.mongodb.net/')
db = client.login_system

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@app.post("/api/signup/{user_type}")
async def signup(user_type: str, user: User):
    collection = db[user_type]
    if await collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email already registered")

    user.password = pwd_context.hash(user.password)
    await collection.insert_one(user.dict())
    return {"message": "User created successfully"}


@app.post("/api/login/{user_type}")
async def login(user_type: str, user: User):
    collection = db[user_type]
    db_user = await collection.find_one({"email": user.email})
    if not db_user or not pwd_context.verify(user.password, db_user['password']):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    return {"message": "Login successful"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)



