/* eslint-disable no-shadow */
import { withStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import configureStore from "../../redux/configureStore";
import styles from "./styles";
import Aside from "../Aside";
import { routes } from "../../routes";
import { MobileHeader } from "../../components/AsideComponent";
import OverlayHelper from "../../commons/OverlayHelper";
import GlobalLoading from "../../commons/GlobalLoading";
import { PrivateRoute } from "../../commons/PrivateRouter";
import { ProtectedRoute } from "../../commons/ProtectedRouter";

const store = configureStore();

function App(props) {
  const [showAside, setShowAside] = useState(false);

  const onShowAside = () => {
    setShowAside(true);
  };

  const showContentMenus = routes => {
    let result = null;

    if (routes.length > 0) {
      result = routes.map(route => {
        let routeResult = null;
        if (route.private === true) {
          routeResult = (
            <PrivateRoute
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        } else if (route.path === "/login") {
          routeResult = (
            <ProtectedRoute
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        } else {
          routeResult = (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        }
        return routeResult;
      });
    }

    return result;
  };

  const { classes } = props;

  return (
    <Provider store={store}>
      <Router>
        <GlobalLoading />
        <div className={classes.wrapper}>
          <OverlayHelper
            closeMenu={() => setShowAside(false)}
            active={showAside}
          />
          <Aside
            showAside={showAside}
            onHiddenAside={() => setShowAside(false)}
          />
          <MobileHeader onShowAside={onShowAside} />
          <div className={classes.article}>
            <Switch>
              {showContentMenus(routes)}
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
