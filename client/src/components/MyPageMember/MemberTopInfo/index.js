import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";
import styles from './styles';
import TitleChild from '../../TitleChild';
import * as titleConstants from '../../../constants/ui/myPage';

function MemberTopInfo(props) {
  const { classes, userInfo } = props;

  return (
    <div className={classes.container}>
      <div className={classes.avatarBox}>
        <div className={classes.avatarBoxLeft}>
          <img
            src="https://instagram.fsgn2-3.fna.fbcdn.net/vp/043080ff43c3943780a670d76783e64f/5E13679C/t51.2885-15/e35/66490128_2450462518511023_1916167546464120854_n.jpg?_nc_ht=instagram.fsgn2-3.fna.fbcdn.net&_nc_cat=107"
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
      <div className={classes.nominated}>
        <TitleChild titleChild={titleConstants.ABOUT_NOMINATED} />
        { titleConstants.ABOUT_NOMINATED_CONTENT }
      </div>
      <div className={classes.listFavorite}>
        <TitleChild titleChild={titleConstants.LIST_FAVORITE} />
        { titleConstants.LIST_FAVORITE_CONTENT }
      </div>
    </div>
  );
}

MemberTopInfo.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object
};

export default withStyles(styles)(MemberTopInfo);
