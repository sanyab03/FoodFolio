import React from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Home Cook",
    review:
      "FoodFolio helped me organize my kitchen and reduce food waste every week. The recipe suggestions are amazing!",
  },
  {
    id: 2,
    name: "Green Bowl Café",
    role: "Restaurant Partner",
    review:
      "Instead of throwing away surplus food, we now donate it easily. It's simple, fast and meaningful.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Volunteer",
    review:
      "The donation feature made it so much easier to connect food with people who actually need it.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonial-section">

      <h2 className="testimonial-heading">
        ❤️ Loved by Our Community
      </h2>

      <p className="testimonial-subheading">
        Helping people reduce food waste and spread kindness every day.
      </p>


      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>

            <div className="avatar">
              {item.name.charAt(0)}
            </div>

            <p className="review">
              "{item.review}"
            </p>

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <h4>{item.name}</h4>
            <span>{item.role}</span>

          </div>
        ))}
      </div>

    </section>
  );
}