import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <Link to="/" className="footer-logo">
            <img src="/milcko .pdf 1.png" alt="MILCKO Logo" />
          </Link>
          <p className="footer-tagline">Sip the goodness of the nature.</p>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-links-section">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/our-farmers">Our Farmers</Link></li>
              <li><Link to="/our-process">Our Process</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/delivery-areas">Delivery Areas</Link></li>
              <li><Link to="/order-tracking">Order Tracking</Link></li>
              <li><Link to="/return-policy">Return & Refund Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Download App</h3>
            <div className="app-badges">
              <a href="#" className="app-badge">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
              </a>
              <a href="#" className="app-badge">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" />
              </a>
            </div>
            <div className="contact-info">
              <p className="address">Our Address:</p>
              <p>Milcko Pvt. Ltd.</p>
              <p>A-1, Sector-45, Near Sector-45</p>
              <p>Bhopal, Madhya Pradesh - 452022</p>
              <div className="assistance">
                <p>Need Assistance?</p>
                <p>milckocustcare@gmail.com</p>
                <p>+91 7224078815</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Milcko | Pure. Fresh. Delivered with Care. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
<div className="social-links">
    <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
    <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
    <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
    <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
</div>