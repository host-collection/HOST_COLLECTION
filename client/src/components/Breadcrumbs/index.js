import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Breadcrumbs, Typography, Link, Paper } from '@material-ui/core';
import styles from './styles';

function GlobalBreadcrumbs(props) {
  const { classes } = props;

  return (
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link color="inherit" to="/">
          Home
        </Link>
        <Link color="inherit" to="/">
          Catalog
        </Link>
        <Link color="inherit" to="/">
          Accessories
        </Link>
        <Link color="inherit" to="/">
          New Collection
        </Link>
        <Typography color="textPrimary">Belts</Typography>
      </Breadcrumbs>
    </Paper>
  );
}

GlobalBreadcrumbs.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(GlobalBreadcrumbs);
