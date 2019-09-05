import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('token') ? (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    ) : (
      <Component {...props} />
    ))}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.any
};
