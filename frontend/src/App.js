
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

// import About from "./components/home/about.js";

function App() {
  return(
    <div>
      <Navbar />
      <LandingHero />
      <Services />
      <Intro />
      <Tabs />
      <Why />
      <Pro />
      <Footer />
    </div>
  )
}

export default App;
