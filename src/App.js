import React, { useEffect } from "react";
import { AppContainer } from "./App.styles.js";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import Projects from "./pages/projects/projects.component";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/proyectos" component={Projects} />
        <Route
          exact
          path="/signIn"
          render={() =>
            currentUser ? <Redirect to="./proyectos" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </AppContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
