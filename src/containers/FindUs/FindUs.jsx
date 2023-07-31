import React from "react";
import "./findUs.css";
import { SubHeading } from "../../components";
import images from "../../constants/images";

const FindUs = () => {
  return (
    <div id='app__findus'>
      <div className='app__findUs-content'>
        <SubHeading title='Contact' />
        <h1>Find Us</h1>
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <div className='app__findUs-content-wrapper'>
          <h6>Opening Hours</h6>
          <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
        <button>Visit Us</button>
      </div>
      <div className='app__findUs-image'>
        <img src={images.findus} />
      </div>
    </div>
  );
};

export default FindUs;
