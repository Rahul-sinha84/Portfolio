import React from "react";
import Menu from "../components/menubar";
import Intro from "./intro";

const index = () => {
  return (
    <>
      <Menu />
      <Intro />
      <div>Full Page</div>
    </>
  );
};

export default index;
