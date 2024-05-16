import React from "react";
import logoImg from "app/assets/logo.png";
import "./index.css";

const Logo = () => {
  return (
    <div
      style={{ backgroundImage: `url(${logoImg})` }}
      className={"logo"}
    ></div>
  );
};

export default Logo;
