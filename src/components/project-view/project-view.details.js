import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { ProjectDetailContainer, TitleContainer } from "./project-view.styles";

import { selectProject } from "../../redux/projects/projects.selectors";
import FormInput from "../form-input/form-input.component";

const ProjectDetails = ({ project }) => {
  let handleChange = () => {};
  let handleOnChangeCommission = () => {};
  let handleOnChangeAnnotator = () => {};
  return (
    <ProjectDetailContainer>
      <TitleContainer
        name="title"
        label="Titulo del Proyecto"
        value={project.title}
        handleChange={handleChange}
        required
      />

      <FormInput
        name="date"
        type="date"
        label="Fecha"
        value={new Date(project.date).toISOString().split("T")[0]}
        handleChange={handleChange}
        required
      />
      <h3>Comisión:</h3>
      <div>
        Topógrafo:
        <FormInput
          name="name"
          label="Nombre del Topografo"
          value={project.commission.surveyor.name}
          handleChange={handleOnChangeCommission}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Correo del Topografo"
          value={project.commission.surveyor.email}
          handleChange={handleOnChangeCommission}
          required
        />
      </div>
      <div>
        Anotador:
        <FormInput
          name="name"
          label="Nombre del Anotador"
          value={project.commission.surveyor.name}
          handleChange={handleOnChangeAnnotator}
          required
        />
        <FormInput
          name="email"
          label="Correo del Anotador"
          value={project.commission.surveyor.email}
          handleChange={handleOnChangeCommission}
          required
        />
      </div>
    </ProjectDetailContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProject(ownProps.match.params.projectId)(state)
});
// const mapDispatchToProps = ()=>(

// )

export default compose(withRouter, connect(mapStateToProps))(ProjectDetails);
