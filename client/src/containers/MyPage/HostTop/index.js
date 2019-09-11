import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import { HostTopInfo, HostTopInfoStatistical } from '../../../components/MyPageHost';
import { MemberTopFavorite } from "../../../components/MyPageMember";
import TitleChild from "../../../components/TitleChild";
import * as titleConstants from '../../../constants/ui/myPage';

function HostTop(props) {
  const { classes, userInfo } = props;

  return (
    <div className={classes.container}>
      <HostTopInfo userInfo={userInfo} />
      <HostTopInfoStatistical />
      <div className={classes.snsFollowers}>
        <TitleChild titleChild={titleConstants.SNS_FOLLOWERS} />
        <p>
          { `${titleConstants.TWITTER} - 500 ${titleConstants.PEOPLE}` }
        </p>
        <p>
          { `${titleConstants.INSTAGRAM} - 1500 ${titleConstants.PEOPLE}` }
        </p>
      </div>
      <MemberTopFavorite />
    </div>
  );
}

HostTop.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object
};

const mapStateToProps = state => ({
  userInfo: state.user.userInfo
});

const mapDispatchToProps = null;

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(HostTop);
