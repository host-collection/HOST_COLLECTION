import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./styles";
import * as uiActions from "../../actions/loading";

class GlobalLoading extends React.Component {
  render() {
    const { classes, showLoading } = this.props;

    let result = null;

    if (showLoading) {
      result = (
        <div className={classes.wrapper}>
          <CircularProgress className={classes.icon} />
        </div>
      );
    }

    return result;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    showLoading: state.loading.showLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(GlobalLoading);
