import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faBoxOpen, faEye, faLightbulb, faHandHoldingHeart, faUsers } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    title: "Sign Up",
    description: "Create an account to start",
    icon: faUserPlus,
  },
  {
    title: "Inventory Setup",
    description: "Manage your food inventory easily.",
    icon: faBoxOpen,
  },
  {
    title: "Track and Monitor",
    description: " Track inventory & get expiry alerts.",
    icon: faEye,
  },
  {
    title: "Receive Suggestions",
    description: "Discover recipes, reduce waste.",
    icon: faLightbulb,
  },
  {
    title: "Donate Surplus",
    description: "Donate surplus food locally.",
    icon: faHandHoldingHeart,
  },
  {
    title: "Community Engagement",
    description: "Community food sharing platform.",
    icon: faUsers,
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleClick = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  return (
    <section className="how-it-works-section">
      <h2>How It Works</h2>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`step-item ${index === activeStep ? 'active' : ''}`} 
            onClick={() => handleClick(index)}
          >
            <div className="diamond">
              <FontAwesomeIcon icon={step.icon} className="icon" />
            </div>
            <h3>{step.title}</h3>
            <p className="description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
