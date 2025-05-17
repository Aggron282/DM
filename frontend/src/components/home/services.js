import './../../css/home/services.css'; // Optional: import CSS
import Icon1 from "./../../imgs/1.png"
import Icon2 from "./../../imgs/2.png"
import Icon3 from "./../../imgs/3.png"

function Services(){
  return(


  <section class="services-section">
    <h2 class="services-title">Tee Up Your Perfect Lawn</h2>
    <div class="services-grid">
      <div class="service-item">
        <img src={Icon1} alt="Lawn Care" class="service-icon" />
        <h3>Lawn Care</h3>
        <p>Choose from a range of plans and let our pros work to make your lawn look like a fairway.</p>
        <a href="#" class="learn-btn">Learn More</a>
      </div>
      <div class="service-item">
        <img  src={Icon2} alt="Tree Care" class="service-icon" />
        <h3>Tree & Shrub Care</h3>
        <p>Put us on landscaping duty to keep your trees and shrubs healthy and beautiful.</p>
        <a href="#" class="learn-btn">Learn More</a>
      </div>
      <div class="service-item">
        <img  src={Icon3} alt="Pest Control" class="service-icon" />
        <h3>Pest Control</h3>
        <p>Let science-based solutions keep pests from invading your space or interrupting your play.</p>
        <a href="#" class="learn-btn">Learn More</a>
      </div>
    </div>
  </section>

  )
}


export default Services;
