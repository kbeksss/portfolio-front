import "./styles.css";
import { Socials } from "../../widgets";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className={"py-5 pt-5 sm:pt-10 px-8"}>
      <div className={"container mx-auto"}>
        <div className={"grid grid-cols-1 sm:grid-cols-2 items-center"}>
          <div className={"pr-5"}>
            <motion.h1
              className={"text-2xl md:text-4xl uppercase pb-4"}
              initial={{ x: -800 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.5 }}
            >
              Beksultan Kadyrbekov
            </motion.h1>
            <h2 className={"text-xl md:text-3xl pb-3"}>Front-End Developer</h2>
            <p>
              I am an experienced Front-End Developer with four years of
              expertise, specializing in JavaScript. I consistently stay
              informed about emerging technologies and am enthusiastic about
              learning new tools whenever the need arises.
            </p>
            <div className={"pt-5"}>
              <Socials />
            </div>
          </div>
          <div className={"pl-4 order-first sm:order-last"}>
            <div className={"image-wrapper w-3/4 sm:w-full mx-auto px-5 pb-10"}>
              <motion.img
                className={"rounded-full"}
                src="/my-photo.jpeg"
                alt=""
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
