# app.py
from fastapi import FastAPI
from Main import app

if __name__ == "__Main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
