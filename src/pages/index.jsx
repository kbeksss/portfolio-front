import React, { lazy } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { Layout } from "../widgets";

const Main = lazy(() => import("./Main"));
const Projects = lazy(() => import("./Projects"));
const About = lazy(() => import("./About"));
const Contacts = lazy(() => import("./Contacts"));
const Skills = lazy(() => import("./Skills"));

const Routing = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path={"/"} element={<Main />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/about-me"} element={<About />} />
          <Route path={"/contacts"} element={<Contacts />} />
          <Route path={"/skills"} element={<Skills />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
