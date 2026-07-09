import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

import HeroImage from "../assets/hero.png";
import Leaf from "../assets/leaf.png";

import "./Content.css";

const Content = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <section className="hero-wrapper">
      <div className="hero-content">

        {/* LEFT */}

        <div className="hero-text">

          <h4 className="hero-subtitle">
            🌱 Fighting Food Waste, One Meal at a Time
          </h4>

          <h1 className="hero-title">
            Fresh Impact
            <br />
            In Every Action.
          </h1>

          <p className="hero-description">
            Track your food inventory, discover delicious recipes,
            donate surplus meals, and reduce food waste effortlessly.
            Join thousands making a positive impact every day.
          </p>

          {loggedIn ? (
            <div className="logged-in-text">
              Welcome Back 👋
            </div>
          ) : (
            <div className="hero-buttons">

              <Link
                to="/signup"
                className="hero-button"
              >
                Get Started
              </Link>

              <Link
                to="/inventory"
                className="hero-download"
              >
                Explore Inventory
              </Link>

            </div>
          )}

        </div>

        {/* RIGHT */}

        <div className="hero-image">

          <img
            src={Leaf}
            className="floating-leaf"
            alt=""
          />

          <img
            src={HeroImage}
            className="main-bowl"
            alt="Food Bowl"
          />

        </div>

      </div>
    </section>
  );
};

export default Content;

