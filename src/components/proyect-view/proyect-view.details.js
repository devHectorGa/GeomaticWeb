import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { ProyectDetailContainer, TitleContainer } from "./proyect-view.styles";

import { selectProyect } from "../../redux/proyects/proyects.selectors";
import FormInput from "../form-input/form-input.component";

const ProyectDetails = ({ proyect }) => {
  let handleChange = () => {};
  let handleOnChangecommission = () => {};
  let handleOnChangeAnnotator = () => {};
  return (
    <ProyectDetailContainer>
      <TitleContainer
        name="title"
        label="Titulo del Proyecto"
        value={proyect.title}
        handleChange={handleChange}
        required
      />

      <FormInput
        name="date"
        type="date"
        label="Fecha"
        value={new Date(proyect.date).toISOString().split("T")[0]}
        handleChange={handleChange}
        required
      />
      <h3>Comision:</h3>
      <div>
        Topografo:
        <FormInput
          name="name"
          label="Nombre del Topografo"
          value={proyect.commission.surveyor.name}
          handleChange={handleOnChangecommission}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Correo del Topografo"
          value={proyect.commission.surveyor.email}
          handleChange={handleOnChangecommission}
          required
        />
      </div>
      <div>
        Anotador:
        <FormInput
          name="name"
          label="Nombre del Anotador"
          value={proyect.commission.surveyor.name}
          handleChange={handleOnChangeAnnotator}
          required
        />
        <FormInput
          name="email"
          label="Correo del Anotador"
          value={proyect.commission.surveyor.email}
          handleChange={handleOnChangecommission}
          required
        />
      </div>
    </ProyectDetailContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  proyect: selectProyect(ownProps.match.params.proyectId)(state)
});
// const mapDispatchToProps = ()=>(

// )

export default compose(withRouter, connect(mapStateToProps))(ProyectDetails);
