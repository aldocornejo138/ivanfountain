import React from "react";
import BackgroundSlider from "./components/banner/BackgroundSlider";
import Head from "./components/head/Head";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="bg-mainColor h-auto">
      <Head />
      <BackgroundSlider />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
