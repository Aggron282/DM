import React from 'react';
import './../css/general/navbar.css'; // Optional: import CSS
import Logo from "./../imgs/logo.png"
import { useEffect } from 'react';


function Navbar() {




  return (
    <>
      {/* Discount Banner */}
      {/* Top Utility Bar */}
      {/* Top Utility Bar */}
    <div className="top-nav">
      <div className="top-left">
      <a href="/login">Junk Removal Services</a>

      </div>
      <div className="top-right">
        <a href="/login">info@scrapsquad.com</a>
        <a href="/billing">480-309-3030 </a>
        <a href="/login">Review Us</a>
      </div>
    </div>

    {/* Main Navigation Bar */}
    <nav className="navbar" id="mainNavbar">
      <div className="nav-left">
        <a href="/" className="logo-link">
          <img src={Logo} alt="Scrap Squad Logo" className="logo" />
        </a>
      </div>
      <span class="title">Scrap Squad </span>

      <ul className="nav-links">
        <li><a href="/services">Services</a></li>
        <li><a href="/dumping-101">Dumping 101</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/support">Support</a></li>
      </ul>
      <div className="nav-right">
        <a href="/pricing" className="btn-cta">See Pricing</a>
      </div>
    </nav>


    </>
  );
}

export default Navbar;
