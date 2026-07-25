from fastapi import FastAPI
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app = FastAPI()

origins = [
    "http://localhost:3000",  # Next.js
    "http://localhost:5173",  # Vite React
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


model = joblib.load("diabetes_model.pkl")
scaler = joblib.load("scaler.pkl")
@app.get("/")
def home():
    return {"hello" : "world"}
@app.post("/predict")
def predict(data: dict):
    values = np.array([
        [
            data["Pregnancies"],
            data["Glucose"],
            data["BloodPressure"],
            data["SkinThickness"],
            data["Insulin"],
            data["BMI"],
            data["DiabetesPedigreeFunction"],
            data["Age"]
        ]
    ])

    values = scaler.transform(values)
    prediction = model.predict(values)
    probabilities = model.predict_proba(values)

    print(prediction)
    print(probabilities)
    print(probabilities.shape)

    return {
        "prediction": "Diabetic" if int(prediction[0]) == 1 else "Non-Diabetic",
        "non_diabetic_probability": round(float(probabilities[0][0]), 4),
        "diabetic_probability": round(float(probabilities[0][1]), 4)
    }