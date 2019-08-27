import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function RegisterComponent(props) {
  const { classes, onChangeLogin, status } = props;

  return (
    <div className={classes.register}>
      <button
        className={classes.button}
        type="button"
        onClick={onChangeLogin}
      >
        Register Now
      </button>
      <div className={`${classes.registerContent} ${status ? classes.active : ''}`}>
        <h1>Hello register nè</h1>
      </div>
    </div>
  );
}

RegisterComponent.propTypes = {
  classes: PropTypes.object,
  onChangeLogin: PropTypes.func,
  status: PropTypes.bool
};

export default withStyles(styles)(RegisterComponent);
