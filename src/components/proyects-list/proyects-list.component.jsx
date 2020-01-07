import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import ProyectListPreview from "./proyects-list.preview";
import ProyectsListContainer from "./proyects-list.container";
import ProyectsListTitles from "./proyects-list.titles";

import { selectProyects } from "../../redux/proyects/proyects.selectors.js";
import CustomButtom from "../custom-button/custom-buttom.component";
import { addProyectStart } from "../../redux/proyects/proyects.actions";

const ProyectsList = ({ proyects, addProyect, history, match }) => {
  let handleOnAddProyect = () => {
    addProyect();
    history.push(`${match.path}/${proyects.length}`);
  };
  return (
    <ProyectsListContainer>
      <ProyectsListTitles />
      {proyects.map((proyect, key) => (
        <ProyectListPreview key={key} id={key} proyect={proyect} />
      ))}
      <CustomButtom onClick={handleOnAddProyect}>
        Agregar Proyecto +
      </CustomButtom>
    </ProyectsListContainer>
  );
};

const mapStateToPros = createStructuredSelector({ proyects: selectProyects });

const madDispatchToProps = dispatch => ({
  addProyect: () => dispatch(addProyectStart())
});

export default compose(
  connect(mapStateToPros, madDispatchToProps),
  withRouter
)(ProyectsList);
