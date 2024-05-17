import React from "react";
import "./styles.css";

const SocialLink = ({ iconBg, link }) => {
  return (
    <a
      href={link}
      target={"_blank"}
      className={"social-link"}
      style={{ backgroundImage: `url(${iconBg})` }}
    ></a>
  );
};

export default SocialLink;
