import './App.scss';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import TrustedPartners from './components/TrustedPartners';
import WhatWeDo from './components/WhatWeDO';
import WhyGastrwonSales from './components/WhyGastrownSales';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react"
function App() {
  useEffect(() => {
    AOS.init();
    
  });
  return (
    <div className="App">
      <Hero />
      <TrustedPartners />
      <WhyGastrwonSales />
      <WhatWeDo />
      <AboutUs />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
