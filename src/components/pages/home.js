import React from "react";
import BootstrapCarousel from "../../bootstrap_features/bootstrap-carousel";
import ComputerCat from "../../pictures/home/cat_computer.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faApple, faWindows } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <BootstrapCarousel className="custom-carousel" />
      <div className="d-flex justify-content-between align-items-center w-100">
        <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="fa-icon" /></a>  
        <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} className="fa-icon" /></a>  
        <a href="https://www.apple.com/"><FontAwesomeIcon icon={faApple} className="fa-icon" /></a>  
        <a href="https://www.microsoft.com/en-us/"><FontAwesomeIcon icon={faWindows} className="fa-icon" /></a> 
      </div>
      <div className="bottom-content">
        <img
          src={ComputerCat}
          alt="Computer Cat"
        />
        <div className="text-content">
          <p>Sign up Meow</p>
          <p>to Make a Ticket</p>
          <a href="https://kayleece-frontend-4bda42f50f70.herokuapp.com/signup">Sign Up</a>        
        </div>
      </div>
    </div>
  );
}

export default Home;
