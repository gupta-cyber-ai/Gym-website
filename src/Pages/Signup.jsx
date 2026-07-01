import React, { useState } from "react";
import "./Signup.css";
import { FaDumbbell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // 🔥 useNavigate add kiya
import { saveUser } from "../utils/authHelpers"; // 🔥 Import kiya

const Signup = () => {
  const navigate = useNavigate(); // 🔥 Navigate hook
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // 🔥 LOCAL STORAGE MEIN SAVE KARO
    const result = saveUser(
      formData.name,
      formData.email,
      formData.phone,
      formData.password
    );

    if (result.success) {
      alert("Account created successfully! 🎉 Welcome to PowerFit!");
      
      // 🔥 SIGNUP KE BAAD LOGIN PAGE PE BHEJO
      navigate("/login");
      
    } else {
      // 🔥 AGAR EMAIL ALREADY EXIST KARE
      alert(result.message);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Left Side - Branding */}
        <div className="signup-left">
          <Link to="/" className="signup-brand">
            <FaDumbbell className="signup-logo-icon" />
            <h2>
              POWER<span>FIT</span>
            </h2>
          </Link>

          <h1>
            Start Your <span>Fitness</span> Journey Today
          </h1>

          <p>
            Join thousands of members who have transformed their bodies and
            lives with our expert trainers and world-class facilities.
          </p>

          <div className="signup-features">
            <div className="signup-feature">
              <span>✓</span> Expert Personal Trainers
            </div>
            <div className="signup-feature">
              <span>✓</span> Custom Workout Plans
            </div>
            <div className="signup-feature">
              <span>✓</span> Nutrition Guidance
            </div>
            <div className="signup-feature">
              <span>✓</span> 24/7 Gym Access
            </div>
            <div className="signup-feature">
              <span>✓</span> Modern Equipment
            </div>
          </div>

          <div className="signup-stats">
            <div className="signup-stat">
              <h3>500+</h3>
              <p>Happy Members</p>
            </div>
            <div className="signup-stat">
              <h3>20+</h3>
              <p>Expert Trainers</p>
            </div>
            <div className="signup-stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="signup-right">
          <div className="signup-form-box">
            <Link to="/" className="signup-back-link">
              ← Back to Home
            </Link>

            <h3>Create Your Account</h3>
            <p className="signup-form-desc">
              Fill in your details to get started with your fitness journey
            </p>

            <form onSubmit={handleSubmit}>
              <div className="signup-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="signup-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="signup-form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="signup-form-row">
                <div className="signup-form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="signup-form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="signup-terms">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I agree to the <a href="#">Terms & Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="signup-submit-btn">
                Create Account
              </button>

              <p className="signup-login-text">
                Already have an account?{" "}
                <Link to="/login">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;