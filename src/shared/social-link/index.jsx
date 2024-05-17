import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

const SocialLink = ({ iconBg, link }) => {
  return (
    <motion.a
      href={link}
      target={"_blank"}
      className={"social-link"}
      whileHover={{
        scale: 1.2,
      }}
      style={{ backgroundImage: `url(${iconBg})` }}
    ></motion.a>
  );
};

export default SocialLink;
