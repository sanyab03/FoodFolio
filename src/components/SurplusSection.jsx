import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SurplusSection.css";
import Ngo1 from "../assets/ngo1.png";
import Ngo2 from "../assets/ngo2.png";
import Ngo3 from "../assets/ngo3.png";
import Ngo4 from "../assets/ngo4.png";
import Ngo5 from "../assets/ngo5.png";

const donationPartners = [
  {
    id: 1,
    name: "Delhi Food Bank",
    category: "NGO",
    image: Ngo1,
    description: "Accepts cooked meals, groceries & bakery items",
  },
  {
    id: 2,
    name: "Community Hunger Helpers",
    category: "Community Kitchen",
    image: Ngo2,
    description: "Takes excess restaurant or home-cooked food",
  },
  {
    id: 3,
    name: "No Waste India",
    category: "Food Redistribution NGO",
    image: Ngo3,
    description: "Distributes rescued food to shelters and orphanages",
  },
  {
    id: 4,
    name: "Feed Forward Foundation",
    category: "Non-profit",
    image: Ngo4,
    description: "Accepts raw produce & dairy from farms and stores",
  },
  {
    id: 5,
    name: "Hope Meals Network",
    category: "Charity Group",
    image: Ngo5,
    description: "Open 24x7 – ideal for restaurant surplus drop-offs",
  },
];

const SurplusSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const items = [...donationPartners, ...donationPartners, ...donationPartners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const cardWidth = scrollContainer.querySelector(".donation-card").offsetWidth + 20;
    const midpoint = (items.length / 3) * cardWidth;
    scrollContainer.scrollLeft = midpoint;
  }, [items.length]);

  const handleScroll = (direction) => {
    const scrollContainer = scrollRef.current;
    const cardWidth = scrollContainer.querySelector(".donation-card").offsetWidth + 20;

    scrollContainer.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });

    const totalScroll = scrollContainer.scrollWidth;
    const visibleWidth = scrollContainer.offsetWidth;
    const currentScroll = scrollContainer.scrollLeft;

    if (direction === "right" && currentScroll + visibleWidth >= totalScroll - cardWidth * 2) {
      scrollContainer.scrollLeft = totalScroll / 3;
    } else if (direction === "left" && currentScroll <= cardWidth * 2) {
      scrollContainer.scrollLeft = totalScroll / 3;
    }
  };

  return (
    <div className="surplus-section">
      <h2 className="surplus-heading">🧺 Have Surplus? Donate Easily</h2>
      <h3 className="sub-heading">Our Donation Partners</h3>

      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={() => handleScroll("left")}>◀</button>
        <div className="surplus-carousel" ref={scrollRef}>
          {items.map((partner, index) => (
            <div key={index} className="donation-card">
              <img src={partner.image} alt={partner.name} className="donation-img" />
              <h3 className="donation-title">{partner.name}</h3>
              <p className="donation-type">{partner.category}</p>
              <p className="donation-desc">{partner.description}</p>
              <button
              className="donation-btn"
              onClick={() => navigate("/donation")}
            >
              Donate Now
            </button>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => handleScroll("right")}>▶</button>
      </div>
    </div>
  );
};

export default SurplusSection;
