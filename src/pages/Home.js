import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Content from "../components/Content";
import AboutSection from "../components/AboutSection";
import SurplusSection from "../components/SurplusSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";

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
      <TestimonialsSection/>
    </>
  );
};

export default Home;