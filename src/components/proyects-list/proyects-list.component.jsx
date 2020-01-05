import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ProyectListPreview from "./proyects-list.preview";
import ProyectsListContainer from "./proyects-list.container";
import ProyectsListTitles from "./proyects-list.titles";

import { selectProyects } from "../../redux/proyects/proyects.selectors.js";
import CustomButtom from "../custom-button/custom-buttom.component";
import { addProyectStart } from "../../redux/proyects/proyects.actions";

const ProyectsList = ({ proyects, addProyect }) => (
  <ProyectsListContainer>
    <ProyectsListTitles />
    {proyects.map((proyect, key) => (
      <ProyectListPreview key={key} proyect={proyect} />
    ))}
    <CustomButtom onClick={addProyect}>Agregar Proyecto +</CustomButtom>
  </ProyectsListContainer>
);

const mapStateToPros = createStructuredSelector({ proyects: selectProyects });

const madDispatchToProps = dispatch => ({
  addProyect: () => dispatch(addProyectStart())
});

export default connect(mapStateToPros, madDispatchToProps)(ProyectsList);
