import React from "react";
import gitHub from "app/assets/socials/github.png";
import instagram from "app/assets/socials/instagram.png";
import linkedIn from "app/assets/socials/linked-in.png";
import telegram from "app/assets/socials/telegram.png";
import whatsapp from "app/assets/socials/whatsapp.png";
import { SocialLink } from "../../shared/index.js";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div>
      {socials.map(({ link, icon }, index) => (
        <motion.div
          key={index}
          className={"inline-block"}
          initial={{ x: "-50vw" }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeOut",
            delay: 0.3 * (socials.length - index + 1),
          }}
        >
          <SocialLink iconBg={icon} link={link} />
        </motion.div>
      ))}
    </div>
  );
};

const socials = [
  { link: "https://github.com/kbeksss", icon: gitHub },
  { link: "https://www.instagram.com/beksssk/", icon: instagram },
  { link: "https://www.linkedin.com/in/kbeksss/", icon: linkedIn },
  { link: "https://t.me/kbeksss", icon: telegram },
  { link: "https://wa.me/+996553884808", icon: whatsapp },
];

export default Socials;
