import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span><p>fOOD</p>
          <p>fOLIO</p></span>
        </div>
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <p>foodfoilio@save.com</p>
          <p>+123 4567 8901</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024</p>
        <p><a href="/privacy">Privacy policy</a> | <a href="/terms">Terms & Conditions</a></p>
      </div>
    </footer>
  );
};

export default Footer;
