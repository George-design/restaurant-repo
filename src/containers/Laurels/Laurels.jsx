import React from "react";
import "./laurels.css";
import data from "../../constants/data";
import { SubHeading } from "../../components";
import images from "../../constants/images";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='app__laurels-award-card'>
    <div className='laurels-award-card-image'>
      <img src={imgUrl} />
    </div>
    <div className='laurels-award-card-content'>
      <p id='title'>{title}</p>
      <p id='subtitle'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div id='app__laurels'>
      <div className='laurels-header'>
        <SubHeading title='Awards & Recognition' />
        <h1>Our Laurels</h1>
      </div>
      <div className='laurels-content'>
        <div className='laurels-content-content'>
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
        <div className='laurels-content-image'>
          <img src={images.laurels} />
        </div>
      </div>
    </div>
  );
};

export default Laurels;
