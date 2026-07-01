import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      {/* Center Title */}
      <div className="contact-header">
        <span className="contact-tag">Contact Us</span>
        <h2>
          Get In <span>Touch</span> With Us
        </h2>
        <p className="contact-subtitle">
          Have questions about our gym, memberships, or training programs?
          We'd love to hear from you. Reach out and we'll get back to you
          as soon as possible.
        </p>
      </div>

      <div className="contact-container">
        {/* Left - Info Cards */}
        <div className="contact-left">
          {/* Info Card 1 */}
          <div className="contact-info-card">
            <div className="contact-info-icon">📍</div>
            <div>
              <h4>Our Location</h4>
              <p>123 Fitness Street, Sector 15</p>
              <p>New Delhi, India - 110001</p>
            </div>
          </div>

          {/* Info Card 2 */}
          <div className="contact-info-card">
            <div className="contact-info-icon">📞</div>
            <div>
              <h4>Call Us</h4>
              <p>+91 98765 43210</p>
              <p>+91 91234 56789</p>
            </div>
          </div>

          {/* Info Card 3 */}
          <div className="contact-info-card">
            <div className="contact-info-icon">✉️</div>
            <div>
              <h4>Email Us</h4>
              <p>info@yourgym.com</p>
              <p>support@yourgym.com</p>
            </div>
          </div>

          {/* Info Card 4 */}
          <div className="contact-info-card">
            <div className="contact-info-icon">⏰</div>
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
              <p>Sat - Sun: 6:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Social Links */}
          {/* <div className="contact-social">
            <h4>Follow Us</h4>
            <div className="contact-social-links">
              <a href="#" className="social-link">
                <span>📘</span> Facebook
              </a>
              <a href="#" className="social-link">
                <span>📸</span> Instagram
              </a>
              <a href="#" className="social-link">
                <span>🐦</span> Twitter
              </a>
              <a href="#" className="social-link">
                <span>📺</span> YouTube
              </a>
            </div>
          </div> */}
        </div>

        {/* Right - Contact Form */}
        <div className="contact-right">
          <div className="contact-form-box">
            <h3>Send Us A Message</h3>
            <p className="form-desc">
              Fill out the form below and our team will respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="training">Personal Training</option>
                    <option value="pricing">Pricing & Plans</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5915644085986!2d77.20659731508225!3d28.63299798241845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Gym Location"
        ></iframe>
      </div> */}
    </section>
  );
};

