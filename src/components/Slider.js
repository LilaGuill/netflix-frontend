import React from "react";
import Image from "./Image";

const Slider = props => {
  return (
    <div className="slider">
      {props.images.map((element, index) => {
        return <Image key={index} url={element} />;
      })}
    </div>
  );
};

export default Slider;
