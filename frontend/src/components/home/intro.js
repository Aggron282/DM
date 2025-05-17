import React from "react";
import Vid from "./../../imgs/intro.mp4";
import "./../../css/home/intro.css";

function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-text">
        <h1 className="title">See What We Do</h1>
        <p className="summary">
          At The Scrap Squad, we’re more than just junk hauling — we’re
          committed to revitalizing your spaces with eco-conscious service,
          prompt pickups, and a satisfaction guarantee. Proudly serving Phoenix
          and surrounding areas.
        </p>
      </div>
      <div className="intro-video">
        <video autoPlay muted loop>
          <source src={Vid} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Intro;
