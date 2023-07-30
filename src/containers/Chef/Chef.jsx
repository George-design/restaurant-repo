import React from "react";
import "./chef.css";
import { SubHeading } from "../../components";
import images from "../../constants/images";

const Chef = () => {
  return (
    <div id='app__chef'>
      <div className='chef-image'>
        <img src={images.chef} />
      </div>
      <div className='chef-content'>
        <div className='chef-content-header'>
          <SubHeading title="Chef's Word" />
          <h1>What We Believe In</h1>
        </div>
        <div className='chef-content-center'>
          <p>
            <img src={images.quote} />
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
            Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
            Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
            Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
            Nunc.
          </p>
        </div>
        <div className='chef-content-footer'>
          <p id='kevin'>Kevin Luo</p>
          <p>Chef & Founder</p>
          <img src={images.sign} />
        </div>
      </div>
    </div>
  );
};

export default Chef;
