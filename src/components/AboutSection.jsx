import React from "react";
import "./AboutSection.css";
// import { color } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="about-wrapper">
       <h2 className="about-heading">🌍Making Every Bite Count</h2>
       <p className="sub-heading">Discover how Food Folio helps you track smarter, give back, and cook sustainably.</p>
      <div className="about-container">
        <div className="about-card" style={{ backgroundColor: "#135A08", color: "#fff" ,borderColor:"#000",border:"solid"}}>
          <h3>♻️ Track smarter, waste less</h3>
          <p>
            Get real-time inventory updates, expiry alerts, and simple tips to stop tossing good food. Your fridge’s new best friend.
          </p>
        </div>

        <div className="about-card" style={{ backgroundColor: "#7FAF1B", color: "#fff",borderColor:"#000",border:"solid" }}>
          <h3>🍛 Share food, not leftovers</h3>
          <p>
            Easily donate surplus meals to local NGOs. Quick, safe, and directly impactful.
          </p>
        </div>

        <div className="about-card" style={{ backgroundColor: "#d5ec41", color: "#222" ,borderColor:"#000",border:"solid"}}>
          <h3>🌱 Eat smart, live better</h3>
          <p>
            Learn how to store, cook, and reuse like a pro. Waste less, save more, and make food fun again.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
