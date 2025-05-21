import React, { useState } from "react";
import "./../../css/pricing/step_two.css";
import IMG from "./../../imgs/landing.png";

function StepTwoDetails({ formData, setFormData, nextStep, prevStep }) {
  const [urgent, setUrgent] = useState(formData.urgent || false);
  const [errors, setErrors] = useState("");

  // Add weight
  const addWeight = () => {
    setFormData({ ...formData, weights: [...formData.weights, ""] });
  };

  const updateWeight = (i, val) => {
    const newWeights = [...formData.weights];
    newWeights[i] = val;
    setFormData({ ...formData, weights: newWeights });
  };

  const deleteWeight = (i) => {
    const newWeights = formData.weights.filter((_, index) => index !== i);
    setFormData({ ...formData, weights: newWeights });
  };

  // Add schedule date with auto-next-day logic
  const addScheduleDate = () => {
    const currentDates = formData.scheduleDates || [];
    let nextDate = new Date();
    if (currentDates.length > 0) {
      const lastDate = new Date(currentDates[currentDates.length - 1]);
      nextDate = new Date(lastDate);
      nextDate.setDate(lastDate.getDate() + 1);
    }
    const iso = nextDate.toISOString().split("T")[0];
    setFormData({ ...formData, scheduleDates: [...currentDates, iso] });
  };

  const updateScheduleDate = (i, val) => {
    const updated = [...formData.scheduleDates];
    updated[i] = val;
    setFormData({ ...formData, scheduleDates: updated });
  };

  const deleteScheduleDate = (i) => {
    const updated = formData.scheduleDates.filter((_, index) => index !== i);
    setFormData({ ...formData, scheduleDates: updated });
  };

  // Validation
  const validateAndContinue = () => {
    const weightsValid = formData.weights.every(w => w && !isNaN(Number(w)));
    const datesValid = !urgent && formData.scheduleDates?.length > 0;
    if (!formData.items || !weightsValid || (!urgent && !datesValid)) {
      setErrors("Please fill all fields with valid data.");
      return;
    }
    setErrors("");
    nextStep();
  };

  return (
    <div className="step step-2 step-two-grid">
      <div className="form-wrapper">
        <h2 className="step-title highlight">DESCRIBE YOUR JUNK</h2>

        <div className="grid-two-col">
          <div className="form-group">
            <label>Number of Items</label>
            <input
              type="number"
              placeholder="e.g. 12"
              value={formData.items || ""}
              onChange={e => setFormData({ ...formData, items: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Preferred Dates</label>
            {!urgent && (formData.scheduleDates || []).map((d, i) => (
              <div className="weight-row" key={i}>
                <input
                  type="date"
                  value={d}
                  onChange={e => updateScheduleDate(i, e.target.value)}
                />
                <button type="button" className="delete-weight" onClick={() => deleteScheduleDate(i)}>×</button>
              </div>
            ))}
            {!urgent && (
              <button className="add-btn" type="button" onClick={addScheduleDate}>+ Add Date</button>
            )}
          </div>
        </div>

        <div className="form-group full-width">
          <label>Estimated Weights</label>
          {formData.weights.map((w, i) => (
            <div className="weight-row" key={i}>
              <input
                placeholder={`Weight ${i + 1}`}
                value={w}
                onChange={e => updateWeight(i, e.target.value)}
              />
              <button type="button" className="delete-weight" onClick={() => deleteWeight(i)}>×</button>
            </div>
          ))}
          <button className="add-btn" type="button" onClick={addWeight}>+ Add More</button>
        </div>

        <div className="form-group full-width">
          <label>Additional Notes</label>
          <textarea
            placeholder="Tell us more about the job..."
            value={formData.notes}
            onChange={e => setFormData({ ...formData, notes: e.target.value })}
          />
        </div>

        <div className="form-group full-width">
          <button
            type="button"
            className={`urgent-btn ${urgent ? "active" : ""}`}
            onClick={() => {
              setUrgent(!urgent);
              setFormData({ ...formData, urgent: !urgent, scheduleDates: [] });
            }}
          >
            {!urgent ? "Tell us to come ASAP" : "Go on Date Specified"}
          </button>
        </div>

        {errors && <p className="error-text">{errors}</p>}

        <div className="form-nav full-width">
          <button className="nav-btn" onClick={prevStep}>Previous</button>
          <button className="nav-btn" onClick={validateAndContinue}>Next</button>
        </div>
      </div>

      <div className="img-section">
        <img className="img-display" src={IMG} alt="Visual" />
      </div>
    </div>
  );
}

export default StepTwoDetails;
