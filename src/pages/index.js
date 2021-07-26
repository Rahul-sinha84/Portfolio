import React from "react";
import Menu from "../components/menubar";
import Intro from "./intro";
import About from "./about";
import Project from "./projects";
import Section from "./section";
import Contact from "./contact";

const index = () => {
  return (
    <>
      <Menu />
      <Intro />
      <About />
      <Project />
      <Section />
      <Contact />
      <div>Full Page</div>
    </>
  );
};

export default index;
