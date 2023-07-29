import React from "react";
import "./aboutUs.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";

const AboutUs = () => {
  return (
    <div id='app__aboutUs'>
      <div className='aboutUs'>
        <SubHeading title='About Us' />
        <p className='p'>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </p>
        <input type='button' value='Know More' />
      </div>
      <div className='aboutUs-image'>
        <img src={images.knife} />
      </div>
      <div className='history'>
        <SubHeading title='Our History' />
        <p className='p'>
          Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
          Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed
          Odio Nec Aliquet.
        </p>
        <input type='button' value='Know More' />
      </div>
    </div>
  );
};

export default AboutUs;
