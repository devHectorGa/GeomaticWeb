import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <nav className="header">
    <Link className="header-logo" to="/">
      Inicio
    </Link>
    <ul className="header-items">
      <li className="header-item">
        <Link className="header-link" to="/proyectos">
          Proyectos
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="header-link" to="/signIn">
            Iniciar Sesion
          </Link>
        )}
      </li>
    </ul>
  </nav>
);

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);
