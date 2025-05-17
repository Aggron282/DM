import './../../css/home/about.css'; // Optional: import CSS
import About_Img from "./../../imgs/job1.png";
function About (){

  return(

  <section class="pro-section">
    <h2 class="pro-title">This is Pro–Level Lawn Care</h2>

    <div class="pro-feature">
      <img src={About_Img} alt="Pro Lawn" class="pro-bg-image" />
      <div class="pro-overlay-box">
        <h3>Trusted by the PGA TOUR®</h3>
        <p>As the Official Lawn Care Treatment Provider of the PGA TOUR®, we have what it takes to deliver pro-level results.<br />We learn the lay of your land and tailor our approach to give you a golf course quality lawn.</p>
      </div>
    </div>
  </section>

  );

}


export default About;
