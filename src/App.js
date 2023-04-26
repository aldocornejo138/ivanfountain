import React from "react";
import BackgroundSlider from "./components/banner/BackgroundSlider";
import Head from "./components/head/Head";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="bg-mainColor h-auto">
      <Head />
      <BackgroundSlider />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
