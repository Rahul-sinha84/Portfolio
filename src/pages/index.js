import React from "react";
import Menu from "../components/menubar";
import Intro from "./intro";
import About from "./about";

const index = () => {
  return (
    <>
      <Menu />
      <Intro />
      <About />
      <div>Full Page</div>
    </>
  );
};

export default index;
