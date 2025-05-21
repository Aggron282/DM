import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.js";
import LandingHero from "./components/home/landing.js";
import Services from "./components/home/services.js";
import Why from "./components/home/why.js";
import Pro from "./components/home/pro.js";
import Tabs from "./components/home/tabs.js";
import TabGroup from "./components/home/tab_group.js";
import Testimonial from "./components/home/testimonial.js";
import Intro from "./components/home/intro.js";
import Footer from "./components/footer.js";

// New import: PricingPage component
import Quoter from "./components/pricing/quoter.js"; // (You’ll create this)

function HomePage() {
  return (
    <>
      <Navbar />
      <LandingHero />
      <Services />
      <Intro />
      <Tabs />
      <Why />
      <Pro />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Quoter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
