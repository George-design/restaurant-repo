import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import "./header.css";

const Header = () => {
  return (
    <div id='app__header'>
      <div className='header-content'>
        <SubHeading title='Chase The New Flavour' />
        <h1>The Key To Fine Dining</h1>
        <p>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>
        <input type='text' value='Explore Menu' />
      </div>
      <div className='header-image'>
        <img src={images.welcome} />
      </div>
    </div>
  );
};

export default Header;
