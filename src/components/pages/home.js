import React from "react";

import BootstrapCarousel from "../bootstrap_features/bootstrap-carousel";
import Navigation from "../navigation/navigation";
import ComputerCat from "../pictures/home/cat_computer.jpg"




export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <BootstrapCarousel/>
      <div className="d-flex justify-content-between align-items-center w-100">
        <a href="https://www.facebook.com/">Facebook</a>  
        <a href="https://twitter.com/">Twitter</a>  
        <a href="https://www.apple.com/">Apple</a>  
        <a href="https://www.microsoft.com/en-us/">Windows</a> 
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <img
            className="h-50 w-50"
            src={ComputerCat}
            alt="Computer Cat"
          />
        <div className="align-items-center">
          <p>sign up now</p>
          <p>to make a ticket now</p>
          <a href="/signup">Sign Up</a>        
        </div>
      </div>
    </div>
  );
}
