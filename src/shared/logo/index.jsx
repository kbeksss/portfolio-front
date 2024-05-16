import React from "react";
import logoImg from "app/assets/logo.png";
import "./index.css";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      style={{ backgroundImage: `url(${logoImg})` }}
      className={"logo"}
    ></div>
  );
};

export default Logo;
