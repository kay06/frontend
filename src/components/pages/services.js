import React from "react";
import { Link } from 'react-router-dom';
import BootstrapCarousel from "../../bootstrap_features/bootstrap-carousel";
import Computer from "../../pictures/services/computer.jpg";
import Electronics from "../../pictures/services/electronics.jpg";
import Hardware from "../../pictures/services/hardware.jpg";
import Social from "../../pictures/services/social.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faApple, faWindows } from '@fortawesome/free-brands-svg-icons';


function Services() {
  return (
    <div className="services-container">
      <BootstrapCarousel className="custom-carousel" />
      <p>These are some of the brands we work with... </p>
      <div className="d-flex justify-content-between align-items-center w-100">
        <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="fa-icon" /></a>  
        <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} className="fa-icon" /></a>  
        <a href="https://www.apple.com/"><FontAwesomeIcon icon={faApple} className="fa-icon" /></a>  
        <a href="https://www.microsoft.com/en-us/"><FontAwesomeIcon icon={faWindows} className="fa-icon" /></a> 
      </div>
      <div className="services-list">
        <div className="service" id="computer">
          <img src={Computer} alt="Computer" />
          <div className="service-details">
            <h3>Computer Services</h3>
            <p>Computer Service details...</p>
          </div>
        </div>
        <div className="service" id="electronics">
          <img src={Electronics} alt="Electronics" />
          <div className="service-details">
            <h3>Electronics Services</h3>
            <p>Electronics Service details...</p>
          </div>
        </div>
        <div className="service" id="hardware">
          <img src={Hardware} alt="Hardware" />
          <div className="service-details">
            <h3>Hardware Services</h3>
            <p>Hardware Service details...</p>
          </div>
        </div>
        <div className="service" id="social">
          <img src={Social} alt="Social" />
          <div className="service-details">
            <h3>Social Services</h3>
            <p>Social Service details...</p>
          </div>
        </div>
      </div>
      <div>
      <Link to={`/login`} className="signin-link">Sign in to make a ticket now</Link>
      </div>
    </div>
  );
}

export default Services;
