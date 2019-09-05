import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function TitleChild(props) {
  const { classes, titleChild } = props;

  return (
    <div className={classes.titleChild}>
      <h5>
        { titleChild }
      </h5>
    </div>
  );
}

TitleChild.propTypes = {
  classes: PropTypes.object,
  titleChild: PropTypes.string
};

export default withStyles(styles)(TitleChild);
