import React from "react";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { AccountCircle, Lock } from '@material-ui/icons';
import PropTypes from "prop-types";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { NavLink } from 'react-router-dom';
import renderTextField from "../../FormHelper/TextField";
import * as titleConstants from "../../../constants/login";
import validate from "./validate";
import styles from "./styles";

function LoginComponent(props) {
  const {
    classes,
    onChangeRegister,
    status,
    handleSubmit,
    submitting
  } = props;

  const handleSubmitForm = data => {
    console.log(data);
  };

  return (
    <div className={classes.login}>
      <button
        className={classes.button}
        type="button"
        onClick={onChangeRegister}
      >
        Login Now
      </button>
      <div
        className={`${classes.loginContent} ${status ? classes.active : ""}`}
      >
        <form onSubmit={handleSubmit(handleSubmitForm)}>
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
              type="password"
            />
          </div>
          <div className={classes.loginRow}>
            <Button
              disabled={submitting}
              variant="contained"
              color="primary"
              type="submit"
              className={classes.loginBtn}
            >
              { titleConstants.LOGIN_BUTTON }
            </Button>
            <NavLink className={classes.forgot} to="forgotten-password" exact>
              { titleConstants.FORGOTTE_PASSWORD }
            </NavLink>
          </div>
        </form>
        <div className={classes.orLine}>
          <h5>
            <span>{titleConstants.OR}</span>
          </h5>
          <i>{titleConstants.JUST_MEMBER}</i>
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
  submitting: PropTypes.bool
};

const withReduxForm = reduxForm({
  form: titleConstants.LOGIN_FORM_NAME,
  validate
});

export default compose(
  withStyles(styles),
  withReduxForm
)(LoginComponent);
