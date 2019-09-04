import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function MemberSettings(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Hello member settings nè
    </div>
  );
}

MemberSettings.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MemberSettings);
