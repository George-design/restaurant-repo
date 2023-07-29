import React from "react";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div id='app__menuitem'>
      <p>{title}</p>
      <p>{price}</p>
      <p>{tags}</p>
    </div>
  );
};

export default MenuItem;
