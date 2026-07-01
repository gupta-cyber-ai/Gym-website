import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaDumbbell, FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../../utils/authHelpers';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null); // 🔥 User state

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 🔥 Check karo user logged in hai ya nahi
  useEffect(() => {
    const checkUser = () => {
      const currentUser = getCurrentUser();
      setUser(currentUser);
    };

    checkUser();

    // Har 1 second mein check karo (Login/Logout detect karne ke liye)
    const interval = setInterval(checkUser, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 Logout Function
  const handleLogout = () => {
    logoutUser();
    setUser(null);
    alert("Logged out successfully! 👋");
    navigate("/");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo Section */}
        <div className="navbar-logo">
          <FaDumbbell className="logo-icon" />
          <h1 className="logo-text">
            POWER<span>FIT</span>
          </h1>
        </div>

        {/* Menu Links */}
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#progress" onClick={toggleMenu}>Progress</a></li>
          <li><a href="#members" onClick={toggleMenu}>Members</a></li>
          <li><a href="#plans" onClick={toggleMenu}>Plans</a></li>
          <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          
          {/* 🔥 Mobile Buttons - Login/Logout */}
          <li className="mobile-buttons">
            {user ? (
              // ✅ Agar LOGGED IN hai
              <>
                <span className="mobile-user-name">
                  <FaUserCircle /> {user.name}
                </span>
                <button className="btn-logout-mobile" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              // ❌ Agar LOGGED IN NAHI hai
              <>
                <Link to="/login" className="btn-login-mobile" onClick={toggleMenu}>
                  Login
                </Link>
                <Link to="/signup" className="btn-signup-mobile" onClick={toggleMenu}>
                  Join Now
                </Link>
              </>
            )}
          </li>
        </ul>

        {/* 🔥 Desktop Buttons - Login/Logout */}
        <div className="navbar-actions">
          {user ? (
            // ✅ Agar LOGGED IN hai
            <>
              <span className="user-profile">
                <FaUserCircle className="user-icon" />
                <span className="user-name">{user.name}</span>
              </span>
              <button className="btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            // ❌ Agar LOGGED IN NAHI hai
            <>
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/signup" className="btn-signup" onClick={toggleMenu}>
                Join Now
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`navbar-overlay ${menuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      ></div>
    </nav>
  );
};