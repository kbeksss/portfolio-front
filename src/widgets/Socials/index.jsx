import React from "react";
import gitHub from "app/assets/socials/github.png";
import instagram from "app/assets/socials/instagram.png";
import linkedIn from "app/assets/socials/linked-in.png";
import telegram from "app/assets/socials/telegram.png";
import whatsapp from "app/assets/socials/whatsapp.png";
import { SocialLink } from "../../shared/index.js";

const Socials = () => {
  return (
    <div>
      <SocialLink iconBg={gitHub} link={"https://github.com/kbeksss"} />
      <SocialLink
        iconBg={instagram}
        link={"https://www.instagram.com/beksssk/"}
      />
      <SocialLink
        iconBg={linkedIn}
        link={"https://www.linkedin.com/in/kbeksss/"}
      />
      <SocialLink iconBg={telegram} link={"https://t.me/kbeksss"} />
      <SocialLink iconBg={whatsapp} link={"https://wa.me/+996553884808"} />
    </div>
  );
};

export default Socials;
