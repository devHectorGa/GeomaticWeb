import React from "react";
import { connect } from "react-redux";

import { selectProyect } from "../../redux/proyects/proyects.selectors";

const ProyectView = ({ proyect }) => <h2>{proyect.title}</h2>;

const mapStateToProps = (state, ownProps) => ({
  proyect: selectProyect(ownProps.match.params.proyectId)(state)
});

export default connect(mapStateToProps)(ProyectView);
