import React from "react";
import Menu from "../components/menubar";
import Intro from "./intro";
import About from "./about";
import Project from "./projects";

const index = () => {
  return (
    <>
      <Menu />
      <Intro />
      <About />
      <Project />
      <div>Full Page</div>
    </>
  );
};

export default index;
