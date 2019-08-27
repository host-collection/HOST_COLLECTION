import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import { LoginComponent, RegisterComponent } from '../../components/LoginPageComponent';

function LoginPage(props) {
  const { classes } = props;
  const [loginStatus, setLoginStatus] = useState(true);
  const [registerStatus, setRegisterStatus] = useState(false);


  const onChangeRegister = () => {
    setLoginStatus(true);
    setRegisterStatus(false);
  };

  const onChangeLogin = () => {
    setLoginStatus(false);
    setRegisterStatus(true);
  };

  return (
    <div className={classes.loginWrapper}>
      <LoginComponent
        status={loginStatus}
        onChangeRegister={onChangeRegister}
      />
      <RegisterComponent
        status={registerStatus}
        onChangeLogin={onChangeLogin}
      />
    </div>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(LoginPage);
