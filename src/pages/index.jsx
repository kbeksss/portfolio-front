import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "../widgets";
import Main from "./Main";
import Projects from "./Projects";
import About from "./About";
import Contacts from "./Contacts";
import Skills from "./Skills";
import { AnimatePresence } from "framer-motion";

const Routing = () => {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={"/"} element={<Main />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/about-me"} element={<About />} />
          <Route path={"/contacts"} element={<Contacts />} />
          <Route path={"/skills"} element={<Skills />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default Routing;
