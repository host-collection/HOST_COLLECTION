import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as generalActions from "../../actions/general";
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
  componentDidMount() {
    const { generalActionCreators } = this.props;
    const {
      fetchLocation,
      fetchBannerAside,
      fetchGeneralInfo
    } = generalActionCreators;
    fetchLocation();
    fetchBannerAside();
    fetchGeneralInfo();
  }

  fetchApi = () => {
    const { generalActionCreators } = this.props;
    const {
      fetchLocation,
      fetchBannerAside,
      fetchGeneralInfo
    } = generalActionCreators;
    fetchLocation();
    fetchBannerAside();
    fetchGeneralInfo();
  }

  render() {
    const {
      classes,
      locations,
      banners,
      generalInfo,
      showAside,
      onHiddenAside
    } = this.props;
    return (
      <div className={`${classes.aside} ${showAside ? classes.active : ""}`}>
        <button type="button" onClick={this.fetchApi}>Clik</button>
        <Welcome onHiddenAside={onHiddenAside} />
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
  generalActionCreators: PropTypes.shape({
    fetchLocation: PropTypes.func,
    fetchBannerAside: PropTypes.func,
    fetchGeneralInfo: PropTypes.func
  })
};
const mapStateToProps = state => {
  return {
    locations: state.general.locations,
    banners: state.general.banners,
    generalInfo: state.general.generalInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generalActionCreators: bindActionCreators(generalActions, dispatch)
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
