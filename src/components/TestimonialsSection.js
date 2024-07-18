import React from 'react';
import Sun from "../assets/Highlight_05.png";

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <div className="heading-highlights">
        <img id="highlight-heading" src={Sun} alt="Sun Photo" className="colored-image"/>
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-container">
        <div className="testimonial">
          <blockquote>"FoodFolio has been a game-changer for me!"</blockquote>
          <cite>- User 1</cite>
        </div>
        <div className="testimonial">
          <blockquote>"I love how easy it is to manage my food inventory now."</blockquote>
          <cite>- User 2</cite>
        </div>
        <div className="testimonial">
          <blockquote>"Food Folio simplifies meal planning brilliantly. Highly recommend!"</blockquote>
          <cite>- User 3</cite>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
