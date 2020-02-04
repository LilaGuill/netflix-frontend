import React from "react";
import Category from "./Category";
import Slider from "./Slider";
import data from "../data.json";

const Content = () => {
  return data.map(element => {
    return (
      <div key={element.category}>
        <Category category={element.category} />
        <div className="slider">
          <Slider images={element.images} />
        </div>
      </div>
    );
  });
};

export default Content;
