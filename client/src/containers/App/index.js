/* eslint-disable no-shadow */
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import theme from "../../commons/Theme";
import configureStore from "../../redux/configureStore";
import styles from "./styles";
import Aside from "../Aside";
import routes from "../../routes";
import { MobileHeader } from "../../components/AsideComponent";
import OverlayHelper from "../../commons/OverlayHelper";
import GlobalLoading from "../../components/GlobalLoading";
import { PrivateRoute } from '../../commons/PrivateRouter';

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
        return (
          (route.private === true) ? (
            <PrivateRoute
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ) : (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          )
        );
      });
    }

    return <Switch>{result}</Switch>;
  };

  const { classes } = props;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
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
            <div className={classes.article}>{showContentMenus(routes)}</div>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
