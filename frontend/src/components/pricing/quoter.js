import "./../../css/pricing/quote.css";
import StepOneUserInfo from "./step_one";
import StepTwoDetails from "./step_two";
import StepThreeUploader from "./step_three";
import StepFourConfirmation from "./step_four";
import { useState } from "react";
import QuoteLoadingOverlay from "./loader.js"
import axios from "axios";
function QuoteSlider() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    items: "",
    weights: [],
    notes: "",
    date: "",
    urgent: false,
    images: [] // array of File objects
  });

  const steps = ["Info", "Details", "Upload", "Confirm"];

  // ✅ Add this function to submit the data
  const submitQuote = async () => {
  try {
    setLoading(true); // Show loader

    const data = new FormData();
    data.append("name", formData.name);
    data.append("address", formData.address);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("items", formData.items);
    data.append("notes", formData.notes);
    data.append("date", formData.date);
    data.append("urgent", formData.urgent);
    data.append("weights", JSON.stringify(formData.weights));
    formData.images.forEach((file) => data.append("images", file));

    const response = await axios.post("http:/scrapsquad-883401bf1df6.herokuapp.com/api/quote", data);
    console.log("✅ Quote submitted:", response.data);

  } catch (err) {
    console.error("❌ Submission error:", err);
    alert("There was an issue submitting your quote. Please try again.");
  } finally {
    setLoading(false);     // Hide loader
    setStep(4);            // Show confirmation
  }
};

  return (
    <div className="quote-blur-wrapper">
      {loading && <QuoteLoadingOverlay />}
      <p class="title">Scrap Squad </p>

      <div className="quote-container">
        <div className="quote-trust-badges">
          <div>✅ Licensed & Insured</div>
          <div>🚚 Serving the Greater Phoenix Area</div>
          <div>5.0 ★ Average Rating</div>
        </div>

        <div className="quote-hero-bar">
          <h1>Get Your Custom Junk Removal Quote</h1>
        </div>

        <div className="quote-inner-wrapper">
          <div className="quote-progress-bar-horizontal">
            {steps.map((label, index) => (
              <div key={index} className={`progress-item ${step === index + 1 ? "active" : ""}`}>
                <div className="progress-circle">{index + 1}</div>
                <div className="progress-label">{label}</div>
                {index < steps.length - 1 && <div className="progress-line" />}
              </div>
            ))}
          </div>

          <div className="quote-step-content">

            {step === 1 && (
              <StepOneUserInfo
                formData={formData}
                setFormData={setFormData}
                nextStep={() => setStep(2)}
              />
            )}
            {step === 2 && (
              <StepTwoDetails
                formData={formData}
                setFormData={setFormData}
                nextStep={() => setStep(3)}
                prevStep={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <StepThreeUploader
                formData={formData}
                setFormData={setFormData}
                submitQuote={submitQuote}
                nextStep={() => setStep(4)} // optionally skip this if submit auto-advances
                prevStep={() => setStep(2)}
              />
            )}
            {step === 4 && <StepFourConfirmation formData={formData} />}
          </div>
        </div>
      </div>
      <a href = "/"><p className="goback">Back to Main Site </p></a>
    </div>
  );
}

export default QuoteSlider;
