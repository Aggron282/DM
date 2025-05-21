import React, { useState } from "react";
import "./../../css/pricing/quote.css";
import IMG from "./../../imgs/landfill.png";

function StepOneUserInfo({ formData, setFormData, nextStep }) {
  const [error, setError] = useState("");

  const validateAndNext = () => {
    const { name, address, email, phone } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\-\+\s()]{7,}$/;

    if (!name || !address || !email || !phone) {
      setError("All fields are required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <div className="step step-one">
      <div className="form-section">
        <h2>Enter Your Info</h2>

        <input
          placeholder="Full Name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          placeholder="Address"
          value={formData.address}
          onChange={e => setFormData({ ...formData, address: e.target.value })}
        />

        <input
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          placeholder="Phone"
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
        />

        {error && <p className="error-text">{error}</p>}

        <button onClick={validateAndNext}>Next</button>
      </div>

      <div className="image-section">
        <img src={IMG} alt="Intro visual" />
      </div>
    </div>
  );
}

export default StepOneUserInfo;
