import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

const SocialLink = ({ iconBg, link, delay = 1 }) => {
  return (
    <motion.a
      href={link}
      target={"_blank"}
      className={"social-link"}
      style={{ backgroundImage: `url(${iconBg})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    ></motion.a>
  );
};

export default SocialLink;
