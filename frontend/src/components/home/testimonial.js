// components/TestimonialSection.jsx
import React from 'react';
import './../../css/home/testimonial.css';

const TestimonialSection = ({ image, heading, quote, author, buttonText }) => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <h2>{heading}</h2>
        <p className="quote">“{quote}” – {author}</p>
        <button className="cta-button">{buttonText}</button>
      </div>
      <div className="testimonial-image">
        <img src={image} alt="Testimonial" />
      </div>
    </section>
  );
};

export default TestimonialSection;
