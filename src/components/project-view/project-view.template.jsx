import React from "react";
import ProjectDetails from "./project-view.details";

const ProjectTemplate = ({ children }) => {
  return (
    <div>
      <ProjectDetails />
      <div>{children}</div>
    </div>
  );
};

export default ProjectTemplate;
