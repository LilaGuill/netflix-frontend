import React from "react";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo"></img>
    </div>
  );
};

export default Header;
