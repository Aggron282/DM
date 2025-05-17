import React from 'react';
import './../css/general/footer.css';
// import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaTiktok, FaYelp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        <div>
          <h4>About Us</h4>
          <ul>
            <li>About TruGreen</li>
            <li>Executive Staff</li>
            <li>Newsroom</li>
            <li>Careers ↗</li>
          </ul>
        </div>

        <div>
          <h4>Our Services</h4>
          <ul>
            <li>Lawn Care Plan Comparison</li>
            <li>TruShrub</li>
            <li>Pest Control Plan Comparison</li>
            <li>Branch Finder</li>
          </ul>
        </div>

        <div>
          <h4>Resources</h4>
          <ul>
            <li>FAQs</li>
            <li>Learning Center</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h4>For New Service</h4>
          <ul>
            <li>1-844-396-9837</li>
            <li>Get a Call Back</li>
          </ul>
        </div>

        <div>
          <h4>For Our Customer</h4>
          <ul>
            <li>Account Login & Register</li>
            <li>1-844-396-9837</li>
            <li>Customer Support</li>
            <li>Pay My Bill</li>
          </ul>
        </div>
      </div>

      <div className="footer-fineprint">
        <p>
          **Available to residential customers for Lawn, TruDefense Mosquito, TruBarrier
          Perimeter Pest, Flea, Tick & Outdoor Nuisance Pest Control and/or TruShrub Tree &
          Shrub services only...
        </p>
        <p>
          * Special price of 75% off is for first Lawn application★. 50% off for first Tree &
          Shrub application+, and/or Mosquito application★★ only. All other restrictions apply.
        </p>
        <p>
          ◆ TruGreen will gladly visit your property as needed between scheduled visits to
          ensure your satisfaction. Guarantee applies to full program customers only...
        </p>
      </div>

      <div className="footer-bottom">
  <div className="footer-social">
    
  </div>

  <div className="footer-logos">
    <img src="/badges/bbb.png" alt="BBB Accredited" />
    <img src="/badges/nalp.png" alt="NALP Member" />
    <img src="/badges/trugreen-pga.png" alt="TruGreen PGA Partner" />
    <img src="/badges/americas1.png" alt="America’s #1" />
  </div>

  <hr />

  <div className="footer-legal">
    <p>© 2025 TruGreen Limited Partnership. All rights reserved.</p>
    <ul>
      <li>SMS Terms and Conditions</li>
      <li>Terms and Conditions</li>
      <li>Privacy Policy</li>
      <li>California Privacy Notice</li>
      <li>Your Privacy Choices</li>
    </ul>
  </div>
</div>
    </footer>
  );
};

export default Footer;
