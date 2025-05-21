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
      {/* Top Utility Bar */}
  <div className="top-nav">
    <div className="top-left">
      <span>Residential</span>
      <span>Commercial</span>
    </div>
    <div className="top-right">
      <input type="text" placeholder="Search" className="search-box" />
      <a href="/login">Log In</a>
      <a href="/billing">Pay My Bill</a>
      <select className="lang-switcher">
        <option>US/EN</option>
        <option>ES</option>
      </select>
    </div>
  </div>

  {/* Main Nav */}
  <nav className="navbar" id="mainNavbar">
    <div className="nav-left">
      <a href="/" className="logo-link">
        <img src={Logo} alt="Company Logo" className="logo" />
      </a>
    </div>
    <ul className="nav-links">
      <li><a href="/services">Services</a></li>
      <li><a href="/dumping-101">Dumping 101</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Support</a></li>
    </ul>
    <div className="nav-right">
      <button className="btn-outline">Branch Finder</button>
      <a href="/pricing" className="btn-cta">See Pricing</a>
    </div>
  </nav>


    </>
  );
}

export default Navbar;
