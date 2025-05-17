import React from 'react';
import './../../css/home/why.css';
import DemolitionImage from './../../imgs/job7.png'; // use your own image

const Why = () => {
  return (
    <section className="diagonal-hero">
      <div className="hero-text">
        <h2>Trusted by Professionals</h2>
        <p>
          At Scrap Squad, we do more than remove junk—we restore space and peace of mind.
          Our team handles demolitions, pickups, and full cleanouts with care and speed.
        </p>
      </div>
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${DemolitionImage})` }}
      ></div>
    </section>
  );
};

export default Why;
