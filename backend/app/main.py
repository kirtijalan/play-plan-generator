from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Activity(BaseModel):
    title: str
    duration: str
    materials: List[str] = []

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/activities", response_model=List[Activity])
def activities(age_months: int = 36):
    # placeholder data
    return [
        Activity(title="Pipe Cleaner Shapes", duration="10 min", materials=["pipe cleaners", "beads"]),
        Activity(title="Color Sort Cups", duration="8 min", materials=["paper cups", "pom poms"])
    ]
