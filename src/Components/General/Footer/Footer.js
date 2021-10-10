import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();

    document.querySelector(".subscribeUs__input").value = "";
  };

  return (
    <footer>
      <div className="footer__container">
        <div className="footer__part part--one">
          <h2 className="part__title">Quick Links</h2>
          <Link className="footer__link" to="/">
            Home
          </Link>
          <Link className="footer__link" to="/about">
            About
          </Link>
          <Link className="footer__link" to="/joinbeta">
            Join Beta
          </Link>
          <Link className="footer__link" to="/team">
            Our Team
          </Link>
          <Link className="footer__link" to="/contact">
            Contact Us
          </Link>
        </div>
        <div className="footer__part part--two">
          <h2 className="part__title">Reach Us</h2>
          <div>
            <h4>
              <i className="fa fa-phone"></i> : +91-86378 89046
            </h4>
          </div>
          <div>
            <h4>
              <i className="fa fa-envelope"></i> : info@neyx.in
            </h4>
          </div>
          <div>
            <h4>
              <i className="fa fa-map-marker"></i> : Kolkata, WB, IN
            </h4>
          </div>
        </div>
        <div className="footer__part part--three">
          <div className="subscribeUs">
            <h2 className="part__title">Subscribe Us</h2>
            <form className="subscribeUs__form" onSubmit={handleSubmit}>
              <input
                className="subscribeUs__input"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="subscribeUs__submit"
                type="submit"
                value="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div class="socialLinks">
            <h2 className="part__title">Social Media</h2>
            <div className="socialLink__container">
              <a className="socialLink" href="/" hidden>
                <i class="fab fa-facebook-f"></i>
              </a>
              <a className="socialLink" href="/" hidden>
                <i class="fab fa-twitter"></i>
              </a>
              <a
                className="socialLink"
                href="https://www.instagram.com/neyx.in/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                className="socialLink"
                href="https://www.linkedin.com/company/neyx/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
