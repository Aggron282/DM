import React from 'react';
import './../../css/home/landing.css'; // Optional: import CSS

function LandingHero(){
  return(
  <section class="dump-hero">
    <div class="dump-hero-overlay"></div>
    <div class="dump-hero-content">
      <h1>Clear out clutter<br/>with professional junk<br/><span>removal starting at $40.</span></h1>
      <p>Trusted by homeowners and businesses. Fast, affordable, and eco-friendly junk removal you can count on.</p>
      <div class="dump-hero-buttons">
        <a href="#" class="dump-btn dump-btn-primary">Get a Quote</a>
      </div>
    </div>
  </section>


  )
}


export default LandingHero;
