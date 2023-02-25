import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-title item">Made By: Daniel Brock Alexander</p>
        <a
          href="https://www.linkedin.com/in/daniel-b-alexander/"
          className="footer-link item"
        >
          Visit my LinkedIn profile here!
        </a>
        <p className="footer-project item">V School, Level 4 Capstone</p>
      </div>
    </footer>
  );
}
