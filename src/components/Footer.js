import { FaEnvelope, FaPhone } from 'react-icons/fa';

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>f<span>OOD</span>f<span>OLIO</span></h2>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p> <FaEnvelope/> Email: <a href="mailto:foodfolio@save.com"> foodfolio@savefood.com</a></p>
          <p> <FaPhone/> Phone: <a href="tel:+12345678901">+989 967 ....</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FoodFolio. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="/terms">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
