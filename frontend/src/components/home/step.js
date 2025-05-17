// import React from 'react';
import './../../css/home/tab_item.css';
import LandingHero from "./../../imgs/landing.png"
const ServiceStep = ({ image, steps, buttonText }) => {
  return (
    <div className="service-step">
      <div className="service-image">
        <img src={image} alt="Service Preview" />
      </div>
      <div className="service-content">
        {steps.map((step, index) => (
          <div key={index} className="step-block">
            <p className="step-title">STEP {index + 1}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
        <button className="get-started">{buttonText}</button>
      </div>
    </div>
  );
};

export default ServiceStep;
