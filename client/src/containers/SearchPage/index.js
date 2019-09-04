import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './styles';

function SearchPage(props) {
  const { classes } = props;

  const onClickButton = () => {
    console.log('hello');
  };

  const renderButton = () => {
    let result = null;
    if (localStorage.getItem('token')) {
      result = (
        <button type="button" onClick={onClickButton}>
          Hello
        </button>
      );
    } else {
      result = (
        <NavLink to="/login">
          Hello
        </NavLink>
      );
    }
    return result;
  };

  return (
    <div className={classes.container}>
      { renderButton() }
    </div>
  );
}

SearchPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SearchPage);
