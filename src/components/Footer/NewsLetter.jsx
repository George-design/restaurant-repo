import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./newsLetter.css";

const NewsLetter = () => {
  return (
    <div id='app__newsLetter'>
      <SubHeading title='Newsletter' />
      <h1>Subscribe To Our Newsletter</h1>
      <p>And Never Miss Latest Updates!</p>
      <div>
        <input type='text' placeholder='Enter your email address' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
