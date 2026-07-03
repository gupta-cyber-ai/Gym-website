import React, { useState } from "react";
import "./Login.css";
import { FaDumbbell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // 🔥 useNavigate add kiya
import { checkLogin } from "../utils/authHelpers"; // 🔥 Import kiya

const Login = () => {
  const navigate = useNavigate(); // 🔥 Navigate hook

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // 🔥 LOCAL STORAGE SE CHECK KARO
    const result = checkLogin(formData.email, formData.password);

    if (result.success) {
      alert(`Welcome back ${result.user.name}! 🎉`);
      
      // 🔥 LOGIN KE BAAD HOME PAGE PE BHEJO
      navigate("/");
      
    } else {
      alert(result.message);
    }

    setFormData({
      email: "",
      password: "",
      remember: false,
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Branding */}
        <div className="login-left">
          <Link to="/" className="login-brand">
            <FaDumbbell className="login-logo-icon" />
            <h2>
              POWER<span>FIT</span>
            </h2>
          </Link>

          <h1>
            Welcome <span>Back!</span>
          </h1>

          <p>
            Continue your fitness journey where you left off. Login to access
            your workout plans, track progress, and stay motivated.
          </p>

          <div className="login-features">
            <div className="login-feature">
              <div className="login-feature-icon">💪</div>
              <div>
                <h4>Track Your Progress</h4>
                <p>Monitor your fitness journey in real-time</p>
              </div>
            </div>

            <div className="login-feature">
              <div className="login-feature-icon">📊</div>
              <div>
                <h4>Personalized Workouts</h4>
                <p>Get plans tailored to your goals</p>
              </div>
            </div>

            <div className="login-feature">
              <div className="login-feature-icon">🏆</div>
              <div>
                <h4>Achieve More Goals</h4>
                <p>Stay consistent with expert guidance</p>
              </div>
            </div>
          </div>

          <div className="login-quote">
            <p>"The only bad workout is the one that didn't happen."</p>
            <span>— PowerFit Team</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="login-right">
          <div className="login-form-box">
            <Link to="/" className="login-back-link">
              ← Back to Home
            </Link>

            <h3>Login To Your Account</h3>
            <p className="login-form-desc">
              Enter your credentials to access your account
            </p>

            <form onSubmit={handleSubmit}>
              <div className="login-form-group">
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

              <div className="login-form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="login-options">
                <label className="login-remember">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />
                  <span>Remember me</span>
                </label>

              <button 
              type="button" 
              style={{
                background: "none",
                border: "none", 
                color: "white",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Forgot Password?
            </button>
              </div>

              <button type="submit" className="login-submit-btn">
                Login
              </button>

              <div className="login-divider">
                <span>OR</span>
              </div>

              <div className="login-social">
                <button type="button" className="login-social-btn">
                  <span>🔵</span> Continue with Google
                </button>
                <button type="button" className="login-social-btn">
                  <span>📘</span> Continue with Facebook
                </button>
                </div>

              <p className="login-signup-text">
                Don't have an account?{" "}
                <Link to="/signup">Sign up here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;