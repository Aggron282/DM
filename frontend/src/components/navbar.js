import React from 'react';
import './../css/general/navbar.css'; // Optional: import CSS
import Logo from "./../imgs/logo.png"
import { useEffect } from 'react';


function Navbar() {

  useEffect(() => {
    const stickyNavbar = document.getElementById('stickyNavbar');
    const mainNavbar = document.getElementById('mainNavbar');

    const handleScroll = () => {
      const offset = mainNavbar.offsetHeight;
      if (window.scrollY > offset) {
        stickyNavbar.classList.add('show');
      } else {
        stickyNavbar.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Discount Banner */}
      <div className="discount-banner">
        Sign up today and get 25% off your first service!
      </div>

      {/* Main Navbar */}
      <nav className="navbar" id="mainNavbar">
        <div className="nav-left">
          <a href="/" className="logo-link">
            <img
              src={Logo}
              alt="Company Logo"
              className="logo"
            />
            <span className="company-name">Junk Removal Services </span>
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/dumping-101">Dumping 101</a></li>
          <li><a href="/pricing" className="nav-pricing">Pricing</a></li>
        </ul>
        <div className="nav-right">
          <a href="tel:1-844-777-8483" className="phone-number">Call 1-844-777-8483</a>
        </div>
      </nav>

      {/* Sticky Navbar (on scroll) */}
      <nav className="navbar sticky" id="stickyNavbar">
        <div className="nav-left">
          <a href="/" className="logo-link">
            <span className="company-name">DumpAway Pros</span>
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/dumping-101">Dumping 101</a></li>
          <li><a href="/pricing">Pricing</a></li>
        </ul>
        <div className="nav-right">
          <a href="tel:1-844-777-8483" className="phone-number">📞 1-844-777-8483</a>
        </div>
      </nav>


    </>
  );
}

export default Navbar;
