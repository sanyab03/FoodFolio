import React from 'react';
import AboutImage from "../assets/aboutus.jpg";

const AboutUs = () => {
  return (
    <div className="aboutus-wrapper">
      <section className="about-hero">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Food Folio</strong>, your go-to solution for efficient food management.  
            We offer tools and resources for individuals and businesses to manage food supply, streamline meal planning, track inventory, and reduce waste.
          </p>
          <p>
            Our mission is to provide a seamless food management experience by minimizing waste and maximizing efficiency through innovative and effective food resource solutions.
          </p>
        </div>
        <div className="about-image">
          <img src={AboutImage} alt="Zero Waste Concept" />
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
         <p>
    At <strong>Food Folio</strong>, our mission is to revolutionize the way food is managed across households and businesses. We aim to reduce food waste, optimize inventory, and empower individuals and organizations with tools to make smarter, more sustainable food choices.
  </p>
  <p>
    We believe that food resource management should be simple, efficient, and impactful. Our platform is built with the vision of creating a world where excess food is minimized, and every ingredient is tracked and utilized effectively—whether in a family kitchen, a restaurant, or a commercial kitchen.
  </p>
  <p>
    By providing innovative solutions for meal planning, stock tracking, and intelligent food suggestions, we strive to bring clarity and control to your food systems. Our commitment is rooted in sustainability, accessibility, and helping our users take confident steps toward zero-waste living.
  </p>
  <p>
    We are not just a tool — we are a movement toward mindful food usage, community-driven resource sharing, and a healthier planet. Our mission continues to evolve with technology and user needs, and we’re proud to be part of a smarter, cleaner food future.
  </p>
      </section>
    </div>
  );
};

export default AboutUs;
