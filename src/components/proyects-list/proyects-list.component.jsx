import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ProyectView from "../proyect-view/proyect-view.component";

import { selectProyects } from "../../redux/proyects/proyects.selectors.js";

const ProyectsList = ({ proyects }) => (
  <div>
    <p>List</p>
    {proyects.map((proyect, key) => (
      <ProyectView key={key} proyect={proyect} />
    ))}
  </div>
);

const mapStateToPros = createStructuredSelector({ proyects: selectProyects });

export default connect(mapStateToPros)(ProyectsList);
