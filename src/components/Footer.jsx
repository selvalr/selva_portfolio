import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__intro">
          <div>
            <h1 class="footer__usman">Selvamanan R</h1>
            <h1 class="footer__role">A Full-Stack Developer</h1>
          </div>
        </div>
        <div className="footer__social">
          <h2 className="footer__heading">
            YOU CAN FIND ME AT HERE <span>✌</span>
          </h2>
          <div className="footer__icons">
            <a
              href="https://github.com/MdUsmanAnsari"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mdusmanansari/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/9072582/md-usman-ansari"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-stack-overflow"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCzOYncPfhEuW2qEcjt0V-eg"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://twitter.com/mdusmanansari_"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://codepen.io/mdusmanansari"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>©2025. All Rights Reserved.</p>
        <p>
          Design and Built <span className="footer__heart">❤️</span> by R
          Selvamanan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
