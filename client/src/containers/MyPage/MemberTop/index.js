import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import { MemberTopInfo, MemberTopFavorite } from '../../../components/MyPageMember';

function MemberTop(props) {
  const { classes, userInfo } = props;

  return (
    <div className={classes.container}>
      <MemberTopInfo userInfo={userInfo} />
      <MemberTopFavorite />
    </div>
  );
}

MemberTop.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object,
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
)(MemberTop);
