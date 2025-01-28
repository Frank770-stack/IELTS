import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About IELTS</h3>
          <p>
            IELTS is the world’s most popular English language proficiency test
            for higher education and global migration.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>For inquiries, please contact us at info@ielts.org.</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected through our social media channels for updates.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 IELTS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
