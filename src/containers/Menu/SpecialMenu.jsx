import React from "react";
import "./specialMenu.css";
import { SubHeading } from "../../components";
import data from "../../constants/data";
import MenuItem from "../../components/MenuItem/MenuItem";
import images from "../../constants/images";

const SpecialMenu = () => {
  return (
    <div id='app__specialMenu'>
      <div className='app__specialMenu-header'>
        <SubHeading title='Menu That Fits Your Palatte' />
        <h1>Today's Special</h1>
      </div>
      <div className='app__specialMenu-content'>
        <div className='specialMenu-wine'>
          <h3>Wine & Beer</h3>
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
        <div className='specialMenu-image'>
          <img src={images.menu} />
          <div className='specialMenu-button'>
            <button type='button' className='custom__button'>
              View More
            </button>
          </div>
        </div>
        <div className='specialMenu-cocktails'>
          <h3>Cocktails</h3>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
