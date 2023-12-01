import React from "react";
import { Row, Col, Container, Carousel } from 'react-bootstrap';
import BootstrapCarousel from "../bootstrap_features/bootstrap-carousel";
import Computer from "../pictures/services/computer.jpg"
import Electronics from "../pictures/services/electronics.jpg"
import Hardware from "../pictures/services/hardware.jpg"
import Social from "../pictures/services/social.jpg"


export default function Services() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <BootstrapCarousel/>
      <div className="d-flex justify-content-between align-items-center">
        <img
            className="h-50 w-50"
            src={Computer}
            alt="Computer"
        />
        
        <img
          src={Electronics}
          alt="Electronics"
        />

        <img
          src={Hardware}
          alt="Hardware"
        />

        <img
          src={Social}
          alt="Social"
        />

      </div>
      <div>
      <a href="/login">Sign in to make a ticket now</a>
      </div>
    </div>
  );
}
