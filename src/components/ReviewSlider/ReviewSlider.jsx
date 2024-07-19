import React, { useState, useEffect } from 'react';
import './ReviewSlider.css';

const testimonials = [
  { id: 1, name: 'Cathy Lee', role: 'Product Manager', text: "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life." },
  { id: 2, name: 'David Wright', role: 'Research Scientist', text: "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field." },
  // Add more testimonials...
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonials-container">
      <h2>Used by entrepreneurs</h2>
      <p>Proactiv is used by serial entrepreneurs and overachievers.</p>
      <div className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <p>{testimonial.text}</p>
            <div className="testimonial-author">
              <img src={`avatar-${testimonial.id}.jpg`} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;