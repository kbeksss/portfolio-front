import React from "react";
import { Logo } from "shared/ui";
import { DownloadCV } from "widgets";
import "./index.css";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className={"header py-5 px-8"}>
      <div className={"container mx-auto"}>
        <div className={"flex items-center"}>
          <div className={"pr-5"}>
            <Logo />
          </div>
          <div className={"flex-1 flex justify-center"}>
            <Navigation />
          </div>
          <div className={"flex justify-end"}>
            <DownloadCV />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
