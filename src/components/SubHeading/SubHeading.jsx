import React from "react";
import images from "../../constants/images";
import "./SubHeading.css";

const SubHeading = ({ title }) => {
  return (
    <div id='app__subheading'>
      <p>{title}</p>
      <img src={images.spoon} />
    </div>
  );
};

export default SubHeading;
