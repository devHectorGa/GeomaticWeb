import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import {
  HeaderContainer,
  HeaderLink,
  OptionsContainer,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, signOutStart }) => (
  <HeaderContainer>
    <HeaderLink to="/">Inicio</HeaderLink>
    <OptionsContainer>
      {currentUser ? <HeaderLink to="/proyectos">Proyectos</HeaderLink> : null}
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          Cerrar Sesión
        </OptionLink>
      ) : (
        <OptionLink to="/signIn">Iniciar Sesión</OptionLink>
      )}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
