// import React from 'react'
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Content from '../components/Content'
// // import FeaturesSection from '../components/FeaturesSection';
// import HowItWorksSection from '../components/HowItWorksSection';
// import SurplusSection from '../components/SurplusSection';
// import AboutSection from '../components/AboutSection';


// const Home = () => {
//   return (
//     <>
//     <Content/>
//     <AboutSection/>
//     <SurplusSection/>
//     <HowItWorksSection />
//     {/* <FeaturesSection /> */}
    
//     </>
//   )
  
  
// }

// export default Home


import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Content from "../components/Content";
import AboutSection from "../components/AboutSection";
import SurplusSection from "../components/SurplusSection";
import HowItWorksSection from "../components/HowItWorksSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Content />

      <AboutSection />

      <section id="donate">
        <SurplusSection />
      </section>

      <HowItWorksSection />
    </>
  );
};

export default Home;