import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";
import styles from './styles';
import * as titleConstants from '../../../constants/ui/myPage';

function MemberTopInfo(props) {
  const { classes, userInfo } = props;

  return (
    <div className={classes.container}>
      <div className={classes.avatarBox}>
        <div className={classes.avatarBoxLeft}>
          <img
            src="https://image.freepik.com/free-psd/set-merchandising-products-with-company-logo_23-2148154563.jpg"
            alt="avatar"
          />
          <h4>{userInfo.name}</h4>
        </div>
        <NavLink
          to="/my-page/settings"
          title={titleConstants.CLICK_TO_EDIT}
          className={classes.settingBtn}
        >
          <FiChevronRight />
        </NavLink>
      </div>
    </div>
  );
}

MemberTopInfo.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object
};

export default withStyles(styles)(MemberTopInfo);
