import React from "react";
import "./Plans.css";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  
  const navigate = useNavigate();
  
  
  const plans = [
    {
      name: "Basic",
      price: "999",
      duration: "month",
      features: [
        "Access to gym floor",
        "Basic equipment usage",
        "Locker facility",
        "Open hours: 6AM - 10PM",
        "Free Wi-Fi",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "1,999",
      duration: "month",
      features: [
        "Full gym access",
        "Personal trainer (2x/week)",
        "Diet plan included",
        "Cardio + weight training",
        "24/7 access",
        "Free supplements trial",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "3,499",
      duration: "month",
      features: [
        "Everything in Pro",
        "Daily personal trainer",
        "Custom meal plans",
        "Body composition analysis",
        "Priority support",
        "Steam & sauna access",
        "Free merchandise",
      ],
      popular: false,
    },
  ];
  const handleGetStarted = (plan) => {
    navigate("/payment", { state: { plan } });
  };


  return (
    
    <section className="plans" id="plans">
      {/* Center Title */}
      <div className="plans-header">
        <span className="plans-tag">Pricing Plans</span>
        <h2>
          Choose Your <span>Perfect</span> Plan
        </h2>
        <p className="plans-subtitle">
          Flexible membership plans designed to fit your budget and fitness
          goals. No hidden charges, cancel anytime.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="plans-container">
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div
              className={`plan-card ${plan.popular ? "plan-card-popular" : ""}`}
              key={index}
            >
              {plan.popular && (
                <span className="plan-popular-badge">Most Popular</span>
              )}

              <h3 className="plan-name">{plan.name}</h3>

              <div className="plan-price">
                <span className="plan-currency">₹</span>
                <span className="plan-amount">{plan.price}</span>
                <span className="plan-duration">/{plan.duration}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="plan-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`plan-btn ${plan.popular ? "plan-btn-primary" : "plan-btn-outline"}`}
                onClick={() => handleGetStarted(plan)}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="plans-bottom">
          <div className="plans-guarantee">
            <div className="guarantee-icon">🛡️</div>
            <div>
              <h4>Money Back Guarantee</h4>
              <p>Not satisfied? Get a full refund within 7 days.</p>
            </div>
          </div>

          <div className="plans-guarantee">
            <div className="guarantee-icon">⚡</div>
            <div>
              <h4>Instant Access</h4>
              <p>Start your training immediately after sign up.</p>
            </div>
          </div>

          <div className="plans-guarantee">
            <div className="guarantee-icon">🔄</div>
            <div>
              <h4>Cancel Anytime</h4>
              <p>No long-term contracts. Freedom to cancel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;