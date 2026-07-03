import React from "react";
import "./Footer.css";
// import { FaDumbbell,  } from 'react-icons/fa';
import {  FaDumbbell,FaInstagram, FaFacebook } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Column 1 - Brand */}
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <FaDumbbell className="logo-icon" />
              <h3>
                POWER<span>FIT</span>
              </h3>
            </div>
            <p className="footer-brand-text">
              Transform your body, build your strength, and achieve your
              fitness goals with our expert trainers and modern equipment.
              Join the community that never stops growing.
            </p>

            <div className="footer-social">
              <a className="footer-social-link">
                📘
              </a>
              <a className="footer-social-link">
                📸
              </a>
              <a className="footer-social-link">
                🐦
              </a>
              <a className="footer-social-link">
                📺
              </a>

            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#members">Members</a>
              </li>
              <li>
                <a href="#plans">Plans</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Programs */}
  
          {/* Column 4 - Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="footer-contact-icon">📍</span>
                <p>123 Fitness Street, Sector 15, New Delhi, India</p>
              </li>
              <li>
                <span className="footer-contact-icon">📞</span>
                <p>+91 98765 43210</p>
              </li>
              <li>
                <span className="footer-contact-icon">✉️</span>
                <p>info@fitzone.com</p>
              </li>
              <li>
                <span className="footer-contact-icon">⏰</span>
                <p>Mon - Sun: 5AM - 11PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4>Subscribe To Our Newsletter</h4>
            <p>
              Get the latest updates, fitness tips, and exclusive offers
              directly in your inbox.
            </p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} FitZone. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

