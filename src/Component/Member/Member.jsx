import React, { useState, useEffect } from "react";
import "./Member.css";
import memberImage4 from "../../Assest/member_img4.webp";
import memberImage3 from "../../Assest/member_img3.webp";
import memberImage5 from "../../Assest/member_img5.webp";
import memberImage2 from "../../Assest/member_img2.webp";
import memberImage6 from "../../Assest/member_img6.webp";
import memberImage1 from "../../Assest/member_img1.webp";

export const Member = () => {
  const members = [
    {
      name: "Rahul Sharma",
      role: "Bodybuilder",
      image: memberImage1,
      quote: "This gym changed my life. Lost 20kg in 6 months!",
      stats: { months: 18, goal: "Muscle Gain" },
    },
    {
      name: "Priya Patel",
      role: "Fitness Enthusiast",
      image: memberImage4,
      quote: "Best trainers and amazing environment to workout.",
      stats: { months: 12, goal: "Weight Loss" },
    },
    {
      name: "Arjun Singh",
      role: "Powerlifter",
      image: memberImage2,
      quote: "World-class equipment and 24/7 access. Love it!",
      stats: { months: 24, goal: "Strength" },
    },
    {
      name: "Sneha Verma",
      role: "Yoga & Cardio",
      image: memberImage5,
      quote: "From beginner to advanced, they guided me perfectly.",
      stats: { months: 8, goal: "Flexibility" },
    },
    {
      name: "Vikram Joshi",
      role: "CrossFit Athlete",
      image: memberImage3,
      quote: "The community here keeps me motivated every day.",
      stats: { months: 15, goal: "Endurance" },
    },
    {
      name: "Ananya Gupta",
      role: "Transformation Star",
      image: memberImage6,
      quote: "Nutrition plans + training = incredible results!",
      stats: { months: 10, goal: "Fat Loss" },
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

  const cardsToShow = 3;
  const maxIndex = members.length - cardsToShow;

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

  // Single Member Card
  const MemberCard = ({ member }) => (
    <div className="member-card-inner">
      <div className="member-image">
        <img src={member.image} alt={member.name} />
        <div className="member-overlay">
          <p className="member-quote">"{member.quote}"</p>
        </div>
      </div>

      <div className="member-info">
        <h3>{member.name}</h3>
        <span className="member-role">{member.role}</span>

        <div className="member-stats">
          <div className="member-stat">
            <span className="stat-value">{member.stats.months}</span>
            <span className="stat-label">Months</span>
          </div>
          <div className="member-stat-divider"></div>
          <div className="member-stat">
            <span className="stat-value">{member.stats.goal}</span>
            <span className="stat-label">Goal</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="members" id="members">
      {/* Center Title */}
      <div className="members-header">
        <span className="members-tag">Our Members</span>
        <h2>
          Meet Our <span>Strongest</span> Community
        </h2>
        <p className="members-subtitle">
          Real people, real transformations. Our members are proof that
          dedication and the right guidance can change everything.
        </p>
      </div>

      <div className="members-container">
        {/* Desktop - Slider */}
        {!isMobile && (
          <>
            <div className="members-slider-wrapper">
              {/* Left Arrow */}
              <button
                className={`slider-arrow slider-arrow-left ${
                  currentIndex === 0 ? "arrow-disabled" : ""
                }`}
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <span>‹</span>
              </button>

              {/* Slider Track */}
              <div className="members-slider-track-wrapper">
                <div
                  className="members-slider-track"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / cardsToShow)
                    }%)`,
                  }}
                >
                  {members.map((member, index) => (
                    <div
                      className="member-card"
                      key={index}
                      style={{ minWidth: `${100 / cardsToShow}%` }}
                    >
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                className={`slider-arrow slider-arrow-right ${
                  currentIndex === maxIndex ? "arrow-disabled" : ""
                }`}
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
              >
                <span>›</span>
              </button>
            </div>

            {/* Dots */}
            <div className="slider-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <span
                  key={i}
                  className={`slider-dot ${
                    i === currentIndex ? "dot-active" : ""
                  }`}
                  onClick={() => setCurrentIndex(i)}
                ></span>
              ))}
            </div>
          </>
        )}

        {/* Mobile - Stack Layout (Only 3) */}
        {isMobile && (
          <div className="members-mobile-grid">
            {members.slice(0, 3).map((member, index) => (
              <MemberCard member={member} key={index} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="members-cta">
          <p>Want to be our next success story?</p>
          <a href="#plans" className="members-btn">
            Become A Member
          </a>
        </div>
      </div>
    </section>
  );
};

