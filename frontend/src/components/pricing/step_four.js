import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import "./../../css/pricing/confirm.css";

function StepFourConfirmation() {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="confirmation-container">
      <div className="checkmark-wrapper">
        <div className="checkmark-circle">
          <svg className="checkmark" viewBox="0 0 52 52">
            <path d="M14 27 L22 35 L38 17" fill="none" stroke="#ffffff" strokeWidth="5" />
          </svg>
        </div>
        <h1>We’ll Contact You Shortly!</h1>
        <p>Your custom quote was submitted successfully.</p>
        <p><a href="/" className="a">Click here</a> to go to main site</p>
      </div>
    </div>
  );
}

export default StepFourConfirmation;
