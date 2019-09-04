import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as generalActions from "../../actions/general";
import * as userActions from '../../actions/user';
import * as authActions from "../../actions/auth";
import styles from "./styles";
import {
  SelectArea,
  Welcome,
  MainMenu,
  ContentsMenu,
  BannerAside,
  PromotionAside
} from "../../components/AsideComponent";

class Aside extends React.Component {
  componentDidMount = () => {
    const { generalActionCreators, userActionCreators } = this.props;
    const {
      fetchLocation,
      fetchBannerAside,
      fetchGeneralInfo
    } = generalActionCreators;
    const { fetchUserInfo } = userActionCreators;

    fetchLocation();
    fetchBannerAside();
    fetchGeneralInfo();
    fetchUserInfo();
  }

  render() {
    const {
      classes,
      locations,
      banners,
      generalInfo,
      showAside,
      onHiddenAside,
      history,
      authActionCreators,
      authStatus,
      userInfo
    } = this.props;
    const { logout } = authActionCreators;
    return (
      <div className={`${classes.aside} ${showAside ? classes.active : ""}`}>
        <Welcome
          onHiddenAside={onHiddenAside}
          history={history}
          authStatus={authStatus}
          userInfo={userInfo}
          logout={logout}
        />
        <SelectArea locations={locations} />
        <MainMenu />
        <ContentsMenu />
        <BannerAside banners={banners} />
        <PromotionAside generalInfo={generalInfo} />
      </div>
    );
  }
}

Aside.propTypes = {
  classes: PropTypes.object,
  locations: PropTypes.array,
  banners: PropTypes.array,
  generalInfo: PropTypes.array,
  showAside: PropTypes.bool,
  onHiddenAside: PropTypes.func,
  history: PropTypes.object,
  userInfo: PropTypes.object,
  authStatus: PropTypes.string,
  generalActionCreators: PropTypes.shape({
    fetchLocation: PropTypes.func,
    fetchBannerAside: PropTypes.func,
    fetchGeneralInfo: PropTypes.func
  }),
  authActionCreators: PropTypes.shape({
    logout: PropTypes.func
  }),
  userActionCreators: PropTypes.shape({
    fetchUserInfo: PropTypes.func
  })
};
const mapStateToProps = state => {
  return {
    locations: state.general.locations,
    banners: state.general.banners,
    generalInfo: state.general.generalInfo,
    authStatus: state.auth.authStatus,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generalActionCreators: bindActionCreators(generalActions, dispatch),
    authActionCreators: bindActionCreators(authActions, dispatch),
    userActionCreators: bindActionCreators(userActions, dispatch),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(Aside);
