import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/predict",
        formData
      );

      setResult(response.data);
    } catch (err) {
      console.error(err);
      alert("Failed to connect to backend.");
    }

    setLoading(false);
  };

  const inputs = [
    { label: "Pregnancies", name: "Pregnancies" },
    { label: "Glucose", name: "Glucose" },
    { label: "Blood Pressure", name: "BloodPressure" },
    { label: "Skin Thickness", name: "SkinThickness" },
    { label: "Insulin", name: "Insulin" },
    { label: "BMI", name: "BMI" },
    {
      label: "Diabetes Pedigree Function",
      name: "DiabetesPedigreeFunction",
    },
    { label: "Age", name: "Age" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Diabetes Prediction
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Enter the patient's details below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {inputs.map((input) => (
            <div key={input.name}>
              <label className="block text-gray-700 font-medium mb-2">
                {input.label}
              </label>

              <input
                type="number"
                step="any"
                name={input.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              {loading ? "Predicting..." : "Predict"}
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-8 border-t pt-8">

            <h2 className="text-2xl font-bold mb-4 text-center">
              Prediction Result
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="bg-blue-50 rounded-xl p-5 text-center">
                <p className="text-gray-500">Prediction</p>
                <h3 className="text-2xl font-bold text-blue-700 mt-2">
                  {result.prediction}
                </h3>
              </div>

              <div className="bg-green-50 rounded-xl p-5 text-center">
                <p className="text-gray-500">Non-Diabetic</p>
                <h3 className="text-2xl font-bold text-green-700 mt-2">
                  {(result.non_diabetic_probability * 100).toFixed(2)}%
                </h3>
              </div>

              <div className="bg-red-50 rounded-xl p-5 text-center">
                <p className="text-gray-500">Diabetic</p>
                <h3 className="text-2xl font-bold text-red-700 mt-2">
                  {(result.diabetic_probability * 100).toFixed(2)}%
                </h3>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
