import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import TitleChild from '../../TitleChild';
import * as titleConstants from '../../../constants/ui/myPage';

function MemberSettingsInfo(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <TitleChild titleChild={titleConstants.NICK_NAME} />

    </div>
  );
}

MemberSettingsInfo.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MemberSettingsInfo);
