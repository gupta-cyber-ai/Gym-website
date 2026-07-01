import React, { useState } from "react";
import "./Payment.css";
import { FaDumbbell } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
  });

  // Agar plan nahi mila to default plan
  const selectedPlan = plan || {
    name: "Pro Plan",
    price: "1,999",
    duration: "month",
    features: ["Full gym access", "Personal trainer", "Diet plan"],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `🎉 Payment Successful!\n\nPlan: ${selectedPlan.name}\nAmount: ₹${selectedPlan.price}\n\nWelcome to PowerFit family!`
    );
    navigate("/");
  };

  const calculateTax = () => {
    const price = parseInt(selectedPlan.price.replace(/,/g, ""));
    return Math.round(price * 0.18);
  };

  const calculateTotal = () => {
    const price = parseInt(selectedPlan.price.replace(/,/g, ""));
    return price + calculateTax();
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        {/* Top Header */}
        <div className="payment-header">
          <Link to="/" className="payment-brand">
            <FaDumbbell className="payment-logo-icon" />
            <h2>
              POWER<span>FIT</span>
            </h2>
          </Link>

          <Link to="/" className="payment-back-link">
            ← Back to Home
          </Link>
        </div>

        <div className="payment-content">
          {/* Left Side - Payment Form */}
          <div className="payment-left">
            <div className="payment-form-box">
              <h2>Complete Your Payment</h2>
              <p className="payment-form-desc">
                Fill in your details to activate your membership
              </p>

              {/* Personal Info */}
              <div className="payment-section">
                <h3>Personal Information</h3>

                <div className="payment-form-group">
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

                <div className="payment-form-row">
                  <div className="payment-form-group">
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

                  <div className="payment-form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="payment-section">
                <h3>Payment Method</h3>

                <div className="payment-methods">
                  <div
                    className={`payment-method ${
                      paymentMethod === "card" ? "active" : ""
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <span className="method-icon">💳</span>
                    <span>Card</span>
                  </div>

                  <div
                    className={`payment-method ${
                      paymentMethod === "upi" ? "active" : ""
                    }`}
                    onClick={() => setPaymentMethod("upi")}
                  >
                    <span className="method-icon">📱</span>
                    <span>UPI</span>
                  </div>

                  <div
                    className={`payment-method ${
                      paymentMethod === "netbanking" ? "active" : ""
                    }`}
                    onClick={() => setPaymentMethod("netbanking")}
                  >
                    <span className="method-icon">🏦</span>
                    <span>Net Banking</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Card Payment */}
                  {paymentMethod === "card" && (
                    <>
                      <div className="payment-form-group">
                        <label>Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          maxLength="19"
                          required
                        />
                      </div>

                      <div className="payment-form-row">
                        <div className="payment-form-group">
                          <label>Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            maxLength="5"
                            required
                          />
                        </div>

                        <div className="payment-form-group">
                          <label>CVV</label>
                          <input
                            type="password"
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleChange}
                            maxLength="3"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* UPI Payment */}
                  {paymentMethod === "upi" && (
                    <div className="payment-form-group">
                      <label>UPI ID</label>
                      <input
                        type="text"
                        name="upiId"
                        placeholder="yourname@upi"
                        value={formData.upiId}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}

                  {/* Net Banking */}
                  {paymentMethod === "netbanking" && (
                    <div className="payment-form-group">
                      <label>Select Bank</label>
                      <select required>
                        <option value="">Choose your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                        <option value="pnb">Punjab National Bank</option>
                      </select>
                    </div>
                  )}

                  <button type="submit" className="payment-submit-btn">
                    Pay ₹{calculateTotal().toLocaleString("en-IN")}
                  </button>

                  <div className="payment-security">
                    <span>🔒</span>
                    <p>
                      Your payment information is encrypted and secure. We never
                      store your card details.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="payment-right">
            <div className="payment-summary">
              <h3>Order Summary</h3>

              {/* Plan Card */}
              <div className="summary-plan-card">
                <div className="summary-plan-badge">Selected Plan</div>
                <h4>{selectedPlan.name}</h4>
                <div className="summary-plan-price">
                  <span className="summary-currency">₹</span>
                  <span className="summary-amount">{selectedPlan.price}</span>
                  <span className="summary-duration">
                    /{selectedPlan.duration}
                  </span>
                </div>

                <ul className="summary-features">
                  {selectedPlan.features.map((feature, i) => (
                    <li key={i}>
                      <span>✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Breakdown */}
              <div className="summary-breakdown">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{selectedPlan.price}</span>
                </div>

                <div className="summary-row">
                  <span>GST (18%)</span>
                  <span>₹{calculateTax().toLocaleString("en-IN")}</span>
                </div>

                <div className="summary-row summary-discount">
                  <span>Discount</span>
                  <span>- ₹0</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row summary-total">
                  <span>Total Amount</span>
                  <span>₹{calculateTotal().toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="summary-promo">
                <input type="text" placeholder="Enter promo code" />
                <button type="button">Apply</button>
              </div>

              {/* Benefits */}
              <div className="summary-benefits">
                <div className="summary-benefit">
                  <span>🛡️</span>
                  <p>Money Back Guarantee</p>
                </div>
                <div className="summary-benefit">
                  <span>⚡</span>
                  <p>Instant Access</p>
                </div>
                <div className="summary-benefit">
                  <span>🔄</span>
                  <p>Cancel Anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;