import React from "react";
import "./Hero.css";
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tag">Push Harder, Go Further</p>

        <h1>
          Transform Your Body <br />
          Build <span>Your Strength</span> 
        </h1>

        <p className="hero-text">
          Join our gym and start your fitness journey with expert trainers,
          modern equipment, and personalized workout plans.
        </p>

        <div className="hero-buttons">
          {/* <button className="btn btn-primary">Join Now</button> */}
          <Link to="/signup" className="btn btn-primary hero-btn hero-btn-primary">Join Now</Link>
          {/* <button className="btn btn-secondary">View Progress</button> */}
          <a href="#progress" className="btn btn-secondary hero-btn hero-btn-secondary">View Progress</a>
        </div>

        <div className="hero-stats">
          <div className="stat-box">
            <h2>500+</h2>
            <p>Active Members</p>
          </div>

          <div className="stat-box">
            <h2>20+</h2>
            <p>Expert Trainers</p>
          </div>

          <div className="stat-box">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;