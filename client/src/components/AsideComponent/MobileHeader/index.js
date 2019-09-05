import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from './styles';
import { Welcome, MainMenu } from '../index';
import * as authActions from "../../../actions/auth";

function MobileMenu(props) {
  const { classes, onShowAside, authActionCreators } = props;
  const { logout } = authActionCreators;

  return (
    <div className={classes.mobileHeader}>
      <Welcome
        onShowAside={onShowAside}
        mobile="mobile"
        logout={logout}
      />
      <MainMenu mobile="mobile" />
    </div>
  );
}

MobileMenu.propTypes = {
  classes: PropTypes.object,
  onShowAside: PropTypes.func,
  authActionCreators: PropTypes.shape({
    logout: PropTypes.func
  }),
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    authActionCreators: bindActionCreators(authActions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);


export default compose(
  withStyles(styles),
  withConnect
)(MobileMenu);
