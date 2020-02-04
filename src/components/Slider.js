import React from "react";
import Image from "./Image";

const Slider = props => {
  const tab = [];

  for (let i = 0; i < props.images.length; i++) {
    tab.push(<Image key={i} url={props.images[i]} />);
  }
  return <div className="slider">{tab}</div>;
};

export default Slider;
