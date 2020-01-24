import React from "react";
import {
  HeaderContainer,
  HeaderLink,
  HeaderNav,
  HeaderButton
} from "./header.styles";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <HeaderLink to="/">Inicio</HeaderLink>
    <HeaderNav>
      <HeaderLink to="/proyectos">Proyectos</HeaderLink>
      {currentUser ? (
        <HeaderButton onClick={() => auth.signOut()}>SIGN OUT</HeaderButton>
      ) : (
        <HeaderLink to="/signIn">Iniciar Sesión</HeaderLink>
      )}
    </HeaderNav>
  </HeaderContainer>
);

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);
