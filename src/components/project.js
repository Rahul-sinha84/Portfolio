import React from "react";
import { Btn2 } from "./btn";
const project = () => {
  return (
    <div className="project-component">
      <div className="project-component__header">
        <div className="project-component__header--img">
          <img
            src="https://images.unsplash.com/photo-1490077476659-095159692ab5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="project-img"
          />
        </div>
      </div>
      <div className="project-component__lower">
        <div className="project-component__lower--title gradient-text">
          project title
        </div>
        <div className="project-component__lower--description para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="project-component__lower--btn">
          <Btn2 text="View Project" />
        </div>
      </div>
    </div>
  );
};

export default project;
