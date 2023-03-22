import React from "react";
import "../components/styles/style.css";

function DefaultPage(props) {
  return (
    <div className="main">
      <div className="half_one">
        <img
          src={`${props.imageSource}`}
          alt={`${props.imageName}`}
          className="images"
        />
      </div>
      <div className="half-two">{props.children}</div>
    </div>
  );
}

export default DefaultPage;
