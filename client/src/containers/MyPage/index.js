import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import styles from "./styles";
import * as titleConstants from "../../constants/ui/myPage";
import TitlePage from "../../components/TitlePage";
import { myPageMemberRoutes } from '../../routes';

function MyPage(props) {
  const { classes } = props;

  const renderMyPageMember = myPageMemberRoutes => {
    let result = null;

    if (myPageMemberRoutes.length > 0) {
      result = myPageMemberRoutes.map(route => {
        return (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };

  return (
    <div className={classes.container}>
      <TitlePage title={titleConstants.MY_PAGE} />
      <div className={classes.myPageContent}>
        <Switch>
          { renderMyPageMember(myPageMemberRoutes) }
        </Switch>
      </div>
    </div>
  );
}

MyPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MyPage);
