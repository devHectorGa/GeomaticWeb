import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ProyectListPreview from "./proyects-list.preview";
import ProyectsListContainer from "./proyects-list.container";
import ProyectsListTitles from "./proyects-list.titles";

import { selectProyects } from "../../redux/proyects/proyects.selectors.js";
import CustomButtom from "../custom-button/custom-buttom.component";

const ProyectsList = ({ proyects }) => (
  <ProyectsListContainer>
    <ProyectsListTitles />
    {proyects.map((proyect, key) => (
      <ProyectListPreview key={key} proyect={proyect} />
    ))}
    <CustomButtom>Agregar Proyecto +</CustomButtom>
  </ProyectsListContainer>
);

const mapStateToPros = createStructuredSelector({ proyects: selectProyects });

export default connect(mapStateToPros)(ProyectsList);
