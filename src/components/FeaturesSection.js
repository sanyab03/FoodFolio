import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faUtensils, faHeart, faLeaf, faHandshake } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: "Real-Time Inventory Tracking",
    description: "Monitor your food inventory in real-time to minimize waste.",
    icon: faBox,
  },
  {
    title: "Recipe Suggestions",
    description: "Suggest recipes based on the ingredients available in the inventory.",
    icon: faUtensils,
  },
  {
    title: "Donation Coordination",
    description: "Facilitate food donations to local shelters and food banks.",
    icon: faHeart,
  },
  {
    title: "Eco-Friendly Tips",
    description: "Offer tips on how to reduce food waste and manage food storage.",
    icon: faLeaf,
  },
  {
    title: "Community Sharing",
    description: "Share surplus food with neighbors and community members.",
    icon: faHandshake,
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="icon">
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
