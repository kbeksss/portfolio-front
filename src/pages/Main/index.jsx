import "./styles.css";
import { Socials } from "../../widgets";

const Main = () => {
  return (
    <div className={"pt-5 sm:pt-10"}>
      <div className={"container mx-auto"}>
        <div className={"grid grid-cols-1 sm:grid-cols-2 items-center"}>
          <div className={"pr-5"}>
            <h1 className={"text-2xl md:text-4xl uppercase pb-4"}>
              Beksultan Kadyrbekov
            </h1>
            <h2 className={"text-xl md:text-3xl pb-3"}>Front-End Developer</h2>
            <p>
              I am an experienced Front-End Developer with 4 years of experience
              with a main focus on JavaScript. I always stay updated on new
              technologies, and I am always ready to learn one when needed.
            </p>
            <div className={'pt-5'}>
              <Socials />
            </div>
          </div>
          <div className={"pl-4 order-first sm:order-last"}>
            <div className={"image-wrapper w-3/4 sm:w-full mx-auto px-5 pb-10"}>
              <img className={"rounded-full"} src="/my-photo.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
