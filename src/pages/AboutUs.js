import React from 'react';
import AboutImage from "../assets/aboutusbackground.png";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-hero">
      <img src={AboutImage} alt="Zero Waste Concept" className="about-background" />

      <div className="about-text">
        <h1>Empowering a <span>Zero-Waste</span> Future</h1>
        <p>
          Welcome to <strong>Food Folio</strong>, your go-to solution for efficient food management.
          We offer tools and resources for individuals and businesses to manage food supply, streamline meal planning, track inventory, and reduce waste.
        </p>
        <p>
          Our mission is to provide a seamless food management experience by minimizing waste and maximizing efficiency through innovative and effective food resource solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
