import './../../css/home/pro.css';
import About_Img from './../../imgs/job1.png';
import About_Img2 from './../../imgs/job2.png';

function Pro() {
  return (
    <section className="why-section">
      <div
        className="why-card"
        style={{ backgroundImage: `linear-gradient(to top right , rgba(0,0,0,.5), rgba(0,0,0,0)), url(${About_Img})` }}
      >
        <div className="why-overlay">
          <h3>Unbeatable Value</h3>
          <p>
            Nobody makes it easier or more affordable to get a golf course quality
            lawn. With our Verified Price Match Guarantee, we’ll match any
            competitor’s price and beat their results.
          </p>
        </div>
      </div>

      <div
        className="why-card"
        style={{ backgroundImage: `linear-gradient(to top right , rgba(0,0,0,.6), rgba(0,0,0,0)), url(${About_Img2})` }}
      >
        <div className="why-overlay">
          <h3>Committed to Quality</h3>
          <p>
            We’re dedicated to giving you a lawn you’ll love. With our Satisfaction
            Guarantee, if you’re not satisfied, we’ll return between regular visits
            to make things right.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pro;
