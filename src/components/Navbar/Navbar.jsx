import React from "react";
import "./navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  return (
    <div id='app__navbar'>
      <nav>
        <div className='app__navbar-logo'>
          <img src={images.gericht} />
        </div>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Menu</a>
          </li>
          <li>
            <a href='#'>Award</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div className='app__navbar-login'>
          <a href='#'>Log In / Registration</a>|<a href='#'>Book Table</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
