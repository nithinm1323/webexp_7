import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    if (principal && rate && time) {
      const si = (principal * rate * time) / 100;
      setResult(si);
    } else {
      setResult(null);
      alert("Please enter all fields!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4 text-primary">Simple Interest Calculator</h2>
        <div className="mb-3">
          <label className="form-label">Principal Amount:</label>
          <input
            type="number"
            className="form-control"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal amount"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rate of Interest (%):</label>
          <input
            type="number"
            className="form-control"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate of interest"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Time (in years):</label>
          <input
            type="number"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time period"
          />
        </div>

        <button className="btn btn-success w-100" onClick={calculateInterest}>
          Calculate
        </button>

        {result !== null && (
          <div className="alert alert-info mt-4">
            <strong>Simple Interest:</strong> ₹{result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
