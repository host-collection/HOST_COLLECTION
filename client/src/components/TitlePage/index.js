import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function TitlePage(props) {
  const { classes, title } = props;

  return (
    <div className={classes.titlePage}>
      <h1>
        { title }
      </h1>
    </div>
  );
}

TitlePage.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string
};

export default withStyles(styles)(TitlePage);
