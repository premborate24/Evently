import React from 'react';
import video from '../assets/main.mp4';
import './home.css';


function VideoBackground() {
  return (
    <div className="video-container">
      <video
        className="video"
        src={video}
        autoPlay
        loop
        muted
      ></video>
      <div className="overlay">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a href="/service">SERVICES</a>
            </li>
            <li className="nav-item">
              <a href="#celebrations">CELEBRATIONS</a>
            </li>
            <li className="nav-item">
              <a href="/about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <img src="/evently_logo.png" alt="Evently Logo" />
        </div>
        <div className="hook-line">
          Let’s Create Unforgettable Memories Together
        </div>
      </div>
      <section id="home" className="section">Home Section</section>
      <section id="services" className="section">Services Section</section>
      <section id="celebrations" className="section">Celebrations Section</section>
      <section id="about" className="section">About Section</section>
      <section id="contact" className="section">Contact Us Section</section>
    </div>
  );
}

export default VideoBackground;

