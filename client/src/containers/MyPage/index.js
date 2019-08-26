import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function MyPage(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Mypage nè
    </div>
  );
}

MyPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MyPage);
