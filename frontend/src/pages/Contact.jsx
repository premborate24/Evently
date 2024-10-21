import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Contact.css";
import logoos from "../assets/image/blacklogo.jpg"

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Left section with image */}
      <div className="contact-us__image">
        <img
          src={logoos} // Replace with actual image URL
          alt="Contact Us"
        />
      </div>

      {/* Right section with contact info */}
      <div className="contact-us__info">
        <h2>Contact us</h2>
        <div className="contact-us__links">
          <div>
            <h3>Follow us</h3>
            <ul className="social-media">
              <li>
                <a href="https://www.linkedin.com/in/prem-borate-b09b6a331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mr.premz_24/profilecard/?igsh=MXFhb2o2ZWhja3libg==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/PremBorate?t=sZKaovlxgpMIoqO-u6RtyA&s=08" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} /> Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>contact@company.com</p>
            <p>(406) 555-0120</p>
          </div>
        </div>

        {/* Email box and Login button */}
        <div className="contact-us__login">
          <input
            type="email"
            placeholder="Email"
            className="email-input"
          />
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
