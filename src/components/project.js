import React from "react";
import { Btn2 } from "./btn";
const project = ({ imgSrc = "", name = "", desc = "", link = "" }) => {
  return (
    <div className="project-component">
      <div className="project-component__header">
        <div className="project-component__header--img">
          <img src={imgSrc} alt="project-img" />
        </div>
      </div>
      <div className="project-component__lower">
        <div className="project-component__lower--title gradient-text">
          {name}
        </div>
        <div className="project-component__lower--description para">{desc}</div>
        <div className="project-component__lower--btn">
          <Btn2 href={link} text="View Project" />
        </div>
      </div>
    </div>
  );
};

export default project;
