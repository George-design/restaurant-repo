import React from "react";
import "./menuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div id='app__menuitem'>
      <div className='menuItem-content'>
        <p id='title'>{title}</p>
        <p id='tags'>{tags}</p>
      </div>
      <div className='menuItem-price'>
        <div id='div' />
        <p id='price'>{price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
