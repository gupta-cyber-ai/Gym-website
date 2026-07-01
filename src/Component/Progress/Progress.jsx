import React, { useState, useEffect } from "react";
import "./Progress.css";

export const Progress = () => {
  const programs = [
    {
      icon: "🏋️",
      name: "Strength Training",
      description:
        "Build raw power and muscle mass with heavy compound lifts and progressive overload techniques.",
      features: [
        "Deadlifts & Squats",
        "Bench Press & Rows",
        "Progressive Overload",
        "Expert Supervision",
      ],
      level: "Intermediate",
      duration: "12 Weeks",
    },
    {
      icon: "🔥",
      name: "Weight Loss",
      description:
        "Burn fat effectively with a combination of high-intensity cardio, HIIT workouts and custom diet plans.",
      features: [
        "HIIT Workouts",
        "Calorie Burn Tracking",
        "Custom Diet Plan",
        "Weekly Progress Check",
      ],
      level: "Beginner",
      duration: "8 Weeks",
    },
    {
      icon: "💪",
      name: "Muscle Building",
      description:
        "Focused hypertrophy training to maximize muscle growth with proper nutrition and recovery guidance.",
      features: [
        "Hypertrophy Training",
        "Protein Rich Diet Plan",
        "Supplement Guidance",
        "Body Composition Analysis",
      ],
      level: "Intermediate",
      duration: "16 Weeks",
    },
    {
      icon: "⚡",
      name: "CrossFit",
      description:
        "High-intensity functional training that combines cardio, weightlifting and bodyweight exercises.",
      features: [
        "Functional Movements",
        "WOD (Workout of the Day)",
        "Community Based",
        "Endurance Building",
      ],
      level: "Advanced",
      duration: "Ongoing",
    },
    {
      icon: "🧘",
      name: "Yoga & Meditation",
      description:
        "Improve flexibility, balance and mental wellness with guided yoga sessions and meditation practices.",
      features: [
        "Hatha & Vinyasa Yoga",
        "Breathing Techniques",
        "Stress Relief",
        "Flexibility Training",
      ],
      level: "All Levels",
      duration: "Ongoing",
    },
    {
      icon: "🥊",
      name: "Boxing & MMA",
      description:
        "Learn self-defense techniques while getting an incredible full-body workout with our combat training.",
      features: [
        "Boxing Fundamentals",
        "Kickboxing",
        "Self Defense",
        "Full Body Conditioning",
      ],
      level: "Beginner",
      duration: "10 Weeks",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Program Card Component
  const ProgramCard = ({ program }) => (
    <div className="program-card">
      {/* Icon */}
      <div className="program-icon">{program.icon}</div>

      {/* Level & Duration Tags */}
      <div className="program-tags">
        <span className="program-level">{program.level}</span>
        <span className="program-duration">{program.duration}</span>
      </div>

      {/* Name */}
      <h3 className="program-name">{program.name}</h3>

      {/* Description */}
      <p className="program-desc">{program.description}</p>

      {/* Features */}
      <ul className="program-features">
        {program.features.map((feature, i) => (
          <li key={i}>
            <span className="program-check">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      {/* <a href="#plans" className="program-btn">
        Join Progress
      </a> */}
    </div>
  );

  return (
    <section className="programs" id="progress">
      {/* Center Title */}
      <div className="programs-header">
        <span className="programs-tag">Our Progress</span>
        <h2>
          Explore Our <span>Training</span> Progress
        </h2>
        <p className="programs-subtitle">
          We offer a wide range of fitness programs designed for all levels.
          Whether you're a beginner or advanced, we have the perfect program
          for you.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="programs-container">
        {/* Desktop - Full Grid */}
        {!isMobile && (
          <div className="programs-grid">
            {programs.map((program, index) => (
              <ProgramCard program={program} key={index} />
            ))}
          </div>
        )}

        {/* Mobile - Only 3 Cards */}
        {isMobile && (
          <div className="programs-mobile-grid">
            {programs.slice(0, 3).map((program, index) => (
              <ProgramCard program={program} key={index} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="programs-cta">
          <div className="programs-cta-card">
            <div className="programs-cta-left">
              <h3>Not Sure Which Progress Is Right For You?</h3>
              <p>
                Talk to our fitness experts and get a personalized
                recommendation based on your goals.
              </p>
            </div>
            <a href="#contact" className="programs-cta-btn">
              Talk To An Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

