import React from "react";
import "./footer.css";
import NewsLetter from "../../components/Footer/NewsLetter";
import images from "../../constants/images";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div id='app__footer'>
      <NewsLetter />
      <div className='app__footer-footer'>
        <div className='footer-contact'>
          <h3>Contact Us</h3>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-344-1230</p>
        </div>
        <div className='footer-socials'>
          <img src={images.gericht} id='gericht' />
          <p>
            "The Best Way To Find Yourself Is To Lose
            <br /> Yourself In The Service Of Others."
          </p>
          <img src={images.spoon} id='spoon' />
          <div className='footer_social-media'>
            <FiFacebook className='socials' />
            <FiTwitter className='socials' />
            <FiInstagram className='socials' />
          </div>
        </div>
        <div className='footer-time'>
          <h1>Working Hours</h1>
          <div>
            <p>Monday-Friday:</p>
            <p>08:00 am - 12:00 am</p>
          </div>
          <div>
            <p>Saturday-Sunday:</p>
            <p>07:00 am - 11:00 pm</p>
          </div>
        </div>
      </div>
      <div className='app__footer-copyright'>
        <p>2021 Gericht. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
