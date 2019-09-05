import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { AccountCircle, Lock } from "@material-ui/icons";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { reduxForm, Field } from "redux-form";
import { NavLink } from "react-router-dom";
import * as authAction from '../../../actions/auth';
import renderTextField from "../../../commons/FormHelper/TextField";
import * as titleConstants from "../../../constants/ui/login";
import validate from "./validate";
import amebaLogo from '../../../assets/images/ameba.png';
import googleLogo from "../../../assets/images/google.png";
import styles from "./styles";

function LoginComponent(props) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    classes, onChangeRegister, status, handleSubmit, submitting
  } = props;

  const onHandleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogin = data => {
    const { email, password } = data;
    const { authActionCreators, history } = props;
    const { checkUser } = authActionCreators;
    checkUser(email, password, history);
  };

  return (
    <div className={classes.login}>
      <button
        className={`${classes.button} ${status ? 'active' : ''}`}
        type="button"
        onClick={onChangeRegister}
      >
        Login
      </button>
      <div className={`${classes.loginContent} ${status ? classes.active : ""}`}>
        <form onSubmit={handleSubmit(onLogin)}>
          <div className={classes.divField}>
            <div className={classes.icon}>
              <AccountCircle />
            </div>
            <Field
              id="email"
              label={titleConstants.EMAIL_ADDRESS}
              name="email"
              component={renderTextField}
              className={classes.textField}
              value=""
              autoFocus
            />
          </div>
          <div className={classes.divField}>
            <div className={classes.icon}>
              <Lock />
            </div>
            <Field
              id="password"
              label={titleConstants.PASSWORD}
              name="password"
              className={classes.textField}
              component={renderTextField}
              type={ showPassword ? 'text' : 'password'}
            />
            <button
              type="button"
              className={classes.showPassword}
              onClick={onHandleShowPassword}
            >
              { showPassword ? <MdVisibility /> : <MdVisibilityOff /> }
            </button>
          </div>
          <div className={classes.loginRow}>
            <Button
              disabled={submitting}
              variant="contained"
              color="primary"
              type="submit"
              className={classes.loginBtn}
            >
              {titleConstants.LOGIN_BUTTON}
            </Button>
            <NavLink className={classes.forgot} to="forgotten-password" exact>
              {titleConstants.FORGOTTE_PASSWORD}
            </NavLink>
          </div>
        </form>
        <div className={classes.orLine}>
          <h5>
            <span>{titleConstants.OR}</span>
          </h5>
          <i>{titleConstants.JUST_MEMBER}</i>
        </div>
        <div className={classes.socialBtnBox}>
          <Button variant="contained" className={classes.amebaBtn}>
            <img src={amebaLogo} alt="ameba" />
            AMEBA BLOG
          </Button>
          <Button variant="contained" className={classes.googleBtn}>
            <img src={googleLogo} alt="google" />
            GOOGLE
          </Button>
        </div>
      </div>
    </div>
  );
}

LoginComponent.propTypes = {
  classes: PropTypes.object,
  onChangeRegister: PropTypes.func,
  status: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  history: PropTypes.object,
  authActionCreators: PropTypes.shape({
    checkUser: PropTypes.func
  })
};

const mapStateToProps = state => {
  return {
    userSearched: state.auth.userSearched,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authActionCreators: bindActionCreators(authAction, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReduxForm = reduxForm({
  form: titleConstants.LOGIN_FORM_NAME,
  validate
});

export default compose(
  withStyles(styles),
  withReduxForm,
  withConnect
)(LoginComponent);
