import React, { useState, useEffect } from "react";
import "./TestimonialCarousel.css";

const TestimonialCarousel = ({ testimonials, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFade(false), interval - 500);
    const intervalTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, interval);

    return () => {
      clearInterval(intervalTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [current, interval, testimonials.length]);

  const handleSelect = (index) => {
    setFade(true);
    setCurrent(index);
  };

  return (
    <div className="testimonial-carousel">
      <div className={`testimonial-slide ${fade ? "fade-in" : "fade-out"}`}>
        <p className="testimonial-text">"{testimonials[current].text}"</p>
        <span className="testimonial-author">— {testimonials[current].author}</span>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
