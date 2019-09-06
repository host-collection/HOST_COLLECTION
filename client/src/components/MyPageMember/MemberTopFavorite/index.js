import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import {
  Tab, Tabs, AppBar, Box
} from "@material-ui/core";
import { GiStrong } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
import * as titleConstants from '../../../constants/ui/myPage';
import styles from "./styles";
import FavoriteHostItem from "../FavoriteHostItem";
import FavoriteShopItem from "../FavoriteShopItem";
import TitleChild from "../../TitleChild";

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

function MemberTopFavorite(props) {
  const { classes } = props;
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.container}>
      <TitleChild titleChild={titleConstants.LIST_FAVORITE} />
      <AppBar position="static" color="default" className={classes.tabBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          classes={{ indicator: classes.indicator }}
        >
          <Tab
            className={`${classes.tabItem} ${value === 0 ? classes.active : ''}`}
            label={titleConstants.HOST}
            icon={<GiStrong />}
            {...a11yProps(0)}
          />
          <Tab
            className={`${classes.tabItem} ${value === 1 ? classes.active : ''}`}
            label={titleConstants.SHOP}
            icon={<FaStore />}
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <FavoriteHostItem />
        <FavoriteHostItem />
        <FavoriteHostItem />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FavoriteShopItem />
        <FavoriteShopItem />
        <FavoriteShopItem />
        <FavoriteShopItem />
      </TabPanel>
    </div>
  );
}

MemberTopFavorite.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MemberTopFavorite);
