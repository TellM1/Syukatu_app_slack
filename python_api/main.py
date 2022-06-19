from fastapi import FastAPI
from typing import Optional
app = FastAPI()

@app.get("/")
async def index():
    return {"message":"Hello world"}

@app.get("/countries/")
async def country(country_name:Optional[str] = None):
    return {
        "country_name":country_name
        }


# @app.post("/")
# async def index():
#     return {"message":"poHello world"}
 