import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as generalActions from "../../actions/general";
import styles from "./styles";
import logo from "../../assets/images/logo.png";
import {
  SelectArea,
  Welcome,
  MainMenu,
  ContentsMenu,
  BannerAside,
  PromotionAside
} from "../../components/AsideComponent";

const Aside = props => {
  const { classes, locations } = props;

  useEffect(() => {
    const { generalActionCreators } = props;
    const { fetchLocation } = generalActionCreators;
    fetchLocation();
  }, [props]);

  return (
    <div className={classes.aside}>
      <NavLink to="/" exact={false}>
        <img className={classes.logo} src={logo} alt="logo" />
      </NavLink>
      <h5 className={classes.locationName}>Tokyo</h5>
      <Welcome />
      <SelectArea locations={locations} />
      <MainMenu />
      <ContentsMenu />
      <BannerAside />
      <PromotionAside />
    </div>
  );
};

Aside.propTypes = {
  classes: PropTypes.object,
  locations: PropTypes.array
};
const mapStateToProps = state => {
  return {
    locations: state.general.location
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
