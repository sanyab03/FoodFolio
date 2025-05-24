import React from 'react';
import Sun from "../assets/Highlight_05.png";

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <div className="heading-highlight">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-container">
        <div className="testimonial">
          <blockquote>
            "I never realized how much food I was wasting until I started tracking it. This app helped us cut our kitchen waste by half in two weeks."
          </blockquote>
          <cite>— A family of four</cite>
        </div>
        <div className="testimonial">
          <blockquote>
            "We used to waste trays of food weekly, now we donate effortlessly thanks to this platform."
          </blockquote>
          <cite>— Head Chef, Local Eatery</cite>
        </div>
        <div className="testimonial">
          <blockquote>
            "Teaching food waste was tough,  now our cafeteria wastes less than 10% thanks to this tool."
          </blockquote>
          <cite>— A school administrator</cite>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
