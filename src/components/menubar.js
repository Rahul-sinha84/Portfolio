import React from "react";

const navbar = () => {
  return (
    <div className="menubar">
      <div className="menubar__left">
        <div className="menubar--link">PORTFOLIO</div>
      </div>
      <div className="menubar__right">
        <div className="menubar--link">About</div>
        <div className="menubar--link">Project</div>
        <div className="menubar--link">Experience</div>
        <div className="menubar--link">Achievements</div>
        <div className="menubar--link">Contact Me</div>
      </div>
    </div>
  );
};

export default navbar;
