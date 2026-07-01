import React, { useState, useEffect } from "react";
import "./Testimonials.css";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Kumar",
      role: "Lost 25kg in 8 Months",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review:
        "Joining this gym was the best decision of my life. The trainers are incredibly supportive and the environment keeps you motivated every single day. I never thought I could transform my body like this!",
    },
    {
      name: "Neha Sharma",
      role: "Fitness Transformation",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review:
        "The personalized diet plans and workout routines made all the difference. I feel stronger, healthier, and more confident than ever before. The trainers truly care about your progress.",
    },
    {
      name: "Rohit Verma",
      role: "Muscle Gain Journey",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review:
        "World-class equipment and 24/7 access made it so convenient for me. The community here is amazing — everyone supports each other. Gained 12kg of pure muscle in one year!",
    },
    {
      name: "Kavita Singh",
      role: "Yoga & Wellness",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      rating: 4,
      review:
        "I came here for yoga classes and ended up falling in love with the entire fitness culture. The instructors are patient, kind, and extremely knowledgeable. Highly recommend!",
    },
    {
      name: "Deepak Joshi",
      role: "CrossFit Enthusiast",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review:
        "The CrossFit program here is next level. Every session pushes you beyond your limits. I've seen incredible improvements in my endurance and overall fitness. Best gym in the city!",
    },
    {
      name: "Pooja Patel",
      role: "Weight Loss Success",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review:
        "From struggling with weight issues to running marathons — this gym made it possible. The nutrition guidance combined with expert training is unbeatable. Thank you for changing my life!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const maxIndex = testimonials.length - 1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`star ${i < count ? "star-filled" : ""}`}>
        ★
      </span>
    ));
  };

  // Single Card Component
  const TestiCard = ({ item }) => (
    <div className="testi-card">
      <div className="testi-quote-icon">"</div>
      <div className="testi-stars">{renderStars(item.rating)}</div>
      <p className="testi-review">{item.review}</p>
      <div className="testi-user">
        <div className="testi-user-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="testi-user-info">
          <h4>{item.name}</h4>
          <span>{item.role}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="testimonials" id="testimonials">
      {/* Center Title */}
      <div className="testimonials-header">
        <span className="testimonials-tag">Testimonials</span>
        <h2>
          What Our <span>Members</span> Say
        </h2>
        <p className="testimonials-subtitle">
          Don't just take our word for it. Hear from our amazing members who
          transformed their lives with us.
        </p>
      </div>

      <div className="testimonials-container">
        {/* Desktop - Slider */}
        {!isMobile && (
          <>
            <div className="testimonials-slider-wrapper">
              <button
                className={`testi-arrow testi-arrow-left ${
                  currentIndex === 0 ? "testi-arrow-disabled" : ""
                }`}
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <span>‹</span>
              </button>

              <div className="testimonials-track-wrapper">
                <div
                  className="testimonials-track"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((item, index) => (
                    <div
                      className="testi-card-wrapper"
                      key={index}
                      style={{ minWidth: "100%" }}
                    >
                      <TestiCard item={item} />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`testi-arrow testi-arrow-right ${
                  currentIndex === maxIndex ? "testi-arrow-disabled" : ""
                }`}
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
              >
                <span>›</span>
              </button>
            </div>

            {/* Dots */}
            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`testi-dot ${
                    i === currentIndex ? "testi-dot-active" : ""
                  }`}
                  onClick={() => setCurrentIndex(i)}
                ></span>
              ))}
            </div>
          </>
        )}

       
        {/* Mobile - Stack Layout (Only 3) */}
            {isMobile && (
            <div className="testi-mobile-grid">
                {testimonials.slice(0, 3).map((item, index) => (
                <TestiCard item={item} key={index} />
                ))}
            </div>
            )}
      </div>
    </section>
  );
};

