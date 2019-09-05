import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import renderTextField from "../../../commons/FormHelper/TextField";
import validate from "./validate";
import styles from "./styles";
import * as titleConstants from "../../../constants/ui/login";

function RegisterComponent(props) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    classes, onChangeLogin, status, handleSubmit, submitting
  } = props;

  const onHandleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onRegister = data => {
    const { emailRegister, passwordRegister } = data;
    console.log(emailRegister, passwordRegister);
  };

  return (
    <div className={classes.register}>
      <button
        className={`${classes.button} ${status ? 'active' : ''}`}
        type="button"
        onClick={onChangeLogin}
      >
        Register
      </button>
      <div
        className={`${classes.registerContent} ${status ? classes.active : ""}`}
      >
        <h3 className={classes.titleRegister}>
          {titleConstants.QUICK_REGISTER}
        </h3>
        <form onSubmit={handleSubmit(onRegister)}>
          <div className={classes.divField}>
            <Field
              id="emailRegister"
              label={titleConstants.EMAIL_ADDRESS}
              name="emailRegister"
              component={renderTextField}
              className={classes.textField}
              value=""
              margin="normal"
              fullWidth
            />
          </div>
          <div className={classes.divField}>
            <Field
              id="passwordRegister"
              label={titleConstants.PASSWORD}
              name="passwordRegister"
              className={classes.textField}
              component={renderTextField}
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              fullWidth
            />
            <button
              type="button"
              className={classes.showPassword}
              onClick={onHandleShowPassword}
            >
              { showPassword ? <MdVisibility /> : <MdVisibilityOff /> }
            </button>
          </div>
          <div className={classes.divField}>
            <Field
              id="rePasswordRegister"
              label={titleConstants.RETYPE_PASSWORD}
              name="rePasswordRegister"
              className={classes.textField}
              component={renderTextField}
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              fullWidth
            />
            <button
              type="button"
              className={classes.showPassword}
              onClick={onHandleShowPassword}
            >
              { showPassword ? <MdVisibility /> : <MdVisibilityOff /> }
            </button>
          </div>
          <Button
            disabled={submitting}
            variant="contained"
            color="primary"
            type="submit"
            className={classes.registerBtn}
          >
            {titleConstants.QUICK_REGISTER}
          </Button>
        </form>
      </div>
    </div>
  );
}

const withReduxForm = reduxForm({
  form: titleConstants.REGISTER_FORM_NAME,
  validate
});

RegisterComponent.propTypes = {
  classes: PropTypes.object,
  onChangeLogin: PropTypes.func,
  status: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool
};

export default compose(
  withStyles(styles),
  withReduxForm
)(RegisterComponent);
