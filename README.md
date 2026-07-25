# 🩺 Diabetes Prediction System

A full-stack Machine Learning application that predicts whether a person is diabetic based on medical parameters. The application uses a **Logistic Regression** model trained on the **Pima Indians Diabetes Dataset**, with a **FastAPI** backend serving predictions and a **React (Vite)** frontend providing a clean and responsive user interface.

---

## 🚀 Features

- 🔍 Predicts whether a patient is **Diabetic** or **Non-Diabetic**
- 📊 Returns prediction confidence using class probabilities
- ⚡ FastAPI REST API for real-time inference
- 🎨 Modern and responsive React UI built with Tailwind CSS
- ✅ Input validation using Pydantic
- 💾 Trained model and scaler saved using Joblib
- 🌐 CORS enabled for frontend-backend communication

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- FastAPI
- Pydantic
- NumPy
- Joblib

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- Logistic Regression
- StandardScaler

---

## 📂 Project Structure

```
Diabetes-Prediction/
│
├── backend/
│   ├── main.py
│   ├── diabetes_model.pkl
│   ├── scaler.pkl
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## 📊 Input Features

| Feature | Description |
|----------|-------------|
| Pregnancies | Number of pregnancies |
| Glucose | Plasma glucose concentration |
| BloodPressure | Diastolic blood pressure (mm Hg) |
| SkinThickness | Triceps skin fold thickness (mm) |
| Insulin | 2-Hour serum insulin (mu U/ml) |
| BMI | Body Mass Index |
| DiabetesPedigreeFunction | Diabetes pedigree function |
| Age | Age in years |

---

## 📤 API Endpoint

### POST `/predict`

### Request

```json
{
  "Pregnancies": 1,
  "Glucose": 85,
  "BloodPressure": 66,
  "SkinThickness": 29,
  "Insulin": 0,
  "BMI": 26.6,
  "DiabetesPedigreeFunction": 0.351,
  "Age": 31
}
```

### Response

```json
{
  "prediction": "Non-Diabetic",
  "non_diabetic_probability": 0.9234,
  "diabetic_probability": 0.0766
}
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/diabetes-prediction.git
cd diabetes-prediction
```

---

## Backend Setup

Create a virtual environment

```bash
python -m venv .venv
```

Activate the environment

### Windows

```bash
.venv\Scripts\activate
```

### macOS/Linux

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the FastAPI server

```bash
uvicorn main:app --reload
```

Backend will run on:

```
http://localhost:8000
```

Swagger Documentation:

```
http://localhost:8000/docs
```

---

## Frontend Setup

Navigate to the frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Frontend will run on

```
http://localhost:5173
```

---

## 🧠 Machine Learning Workflow

- Load dataset
- Data preprocessing
- Train/Test Split
- Feature Scaling using StandardScaler
- Train Logistic Regression model
- Evaluate model
- Save model using Joblib
- Deploy model with FastAPI
- Consume API using React

---

## 📸 Screenshots

### Home Page

> Add your screenshot here

### Prediction Result

> Add your screenshot here

---

## 📈 Future Improvements

- Compare multiple ML models (Random Forest, SVM, XGBoost)
- User authentication
- Store prediction history
- Deploy using Docker
- Deploy frontend and backend to the cloud
- Add charts for probability visualization

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.