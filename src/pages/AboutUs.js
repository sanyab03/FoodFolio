import React from 'react';
import About from "../assets/aboutimage.png"; 


const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h1>About Us</h1>
        <img src={About} alt="Our Company" className="about-us-image"/>
      </div>
      <div className="about-us-content">
        <p>
        Welcome to Food Folio, your go-to solution for efficient food management.
        </p>
        <p>
          
        We offer tools and resources for individuals and businesses to manage food supply, streamline meal planning, track inventory, and reduce waste.
        </p>
        <p>
        Our mission is to provide a seamless food management experience, minimizing waste and maximizing efficiency with innovative solutions for simple and effective food resource management.
        </p>
      </div>
      <div className="about-us-sections">
        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a seamless food management experience that minimizes waste and maximizes efficiency. We are dedicated to offering innovative solutions that make managing food resources simple and effective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
