import React from "react";
import "./specialMenu.css";
import { SubHeading } from "../../components";
import data from "../../constants/data";
import MenuItem from "../../components/MenuItem/MenuItem";
import images from "../../constants/images";

const SpecialMenu = () => {
  return (
    <div id='app__specialMenu'>
      <div className='specialMenu-wine'>
        {data.wines.map((wine, index) => (
          <MenuItem
            key='wine.title + index'
            title='wine.title'
            tags='wine.tags'
          />
        ))}
      </div>
      <div className='specialMenu-image'>
        <img src={images.menu} />
      </div>
      <div className='specialMenu-cocktails'>
        {data.wines.map((cocktail, index) => (
          <MenuItem
            key='cocktail.title + index'
            title='cocktail.title'
            tags='cocktail.tags'
          />
        ))}
      </div>
      <div className='specialMenu-button'>
        <button type='button' className='custom__button'>
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
