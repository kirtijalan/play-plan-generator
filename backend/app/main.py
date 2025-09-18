from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# allow  frontend to call the API during dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 
class Activity(BaseModel):
    title: str
    duration: str
    category: str          # e.g. "Motor Skills", "Pretend Play"
    description: str
    materials: List[str] = []

@app.get("/activities", response_model=List[Activity])
def activities(age_months: int = 36):
    return [
        Activity(
            title="Pipe Cleaner Shapes",
            duration="10 min",
            category="Fine Motor Skills",
            description="Bend pipe cleaners into shapes to build finger strength and precision.",
            materials=["pipe cleaners", "beads"],
        ),
        Activity(
            title="Animal Parade",
            duration="12 min",
            category="Gross Motor Skills",
            description="March like different animals (elephant, bunny, crab) to practice balance and coordination.",
            materials=["open space"],
        ),
        Activity(
            title="Tea Party Role Play",
            duration="20 min",
            category="Pretend Play",
            description="Set up a tea party with stuffed animals to encourage turn-taking and expressive language.",
            materials=["cups", "plates", "stuffed animals"],
        ),
        Activity(
            title="Color Match Friends",
            duration="8 min",
            category="Social Skills",
            description="Work together to find and match objects by color; practice simple social rules (“your turn”, “my turn”).",
            materials=["colored cards", "household objects"],
        ),
    ]

#
"""
class Activity(BaseModel):
    title: str
    duration: str
    materials: List[str] = []

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/activities", response_model=List[Activity])
def activities(age_months: int = 36):
    return [
        Activity(title="Pipe Cleaner Shapes", duration="10 min", materials=["pipe cleaners", "beads"]),
        Activity(title="Color Sort Cups", duration="8 min", materials=["paper cups", "pom poms"]),
    ]
"""