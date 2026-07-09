import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import HeroImage from "../assets/hero.png"; 
import Leaf from "../assets/leaf.png";
import BgImage from "../assets/bg.png";
import './Content.css'; 

const Content = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="hero-wrapper">

  <div className="hero-bg-curve">
  <svg
    viewBox="0 0 800 800"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M800 0H600C520 200 520 600 600 800H800V0Z"
      fill="#000000"
    />
    
  </svg>
</div>
      <div className="hero-content">
        <div className="hero-text">
          <h4 className="hero-subtitle">Fighting Food Waste, One Meal at a Time.</h4>
          <h1 className="hero-title">
            Fresh Impact <br /> in Every Action
          </h1>
          <p className="hero-description">
            Rescue surplus food, reduce your carbon footprint, and support communities. Join us in making food matter not waste.
          </p>

          {loggedIn ? (
            <div className="logged-in-text">
              <p>Welcome Back, Change Maker!</p>
            </div>
          ) : (
            <div className="hero-buttons">
              <Link to="/signup" className="hero-button">
                Get Started
              </Link>
              <button className="hero-download">Download Guide</button>
            </div>
          )}
        </div>

        <div className="hero-image">
          <img src={BgImage} alt="Decorative Background" className="bowl-bg" />
          <img src={Leaf} className="floating-leaf leaf1" alt="Leaf" />
          <img src={HeroImage} alt="Food Bowl" className="main-bowl" />
        </div>
      </div>
    </div>
  );
};

export default Content;

