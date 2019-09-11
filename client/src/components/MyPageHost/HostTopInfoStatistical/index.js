import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
  Tab, Tabs, AppBar, Box
} from "@material-ui/core";
import * as titleConstants from "../../../constants/ui/myPage";
import TitleChild from "../../TitleChild";
import styles from './styles';


function TabPanel(props) {
  const {
    children, value, index, classes, ...other
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
  value: PropTypes.any.isRequired,
  classes: PropTypes.object
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

function HostTopInfoStatistical(props) {
  const { classes } = props;
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.statistical}>
      <TitleChild titleChild={titleConstants.STATISTICAL} />
      <h5>{`4343343 ${titleConstants.PEOPLE_LIKE_THIS}`}</h5>
      <AppBar position="static" color="default" className={classes.tabBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          classes={{ indicator: classes.indicator }}
        >
          <Tab
            className={`${classes.tabItem} ${value === 0 ? 'active' : ""}`}
            label={titleConstants.DAILY}
            {...a11yProps(0)}
          />
          <Tab
            className={`${classes.tabItem} ${value === 1 ? 'active' : ""}`}
            label={titleConstants.WEEK}
            {...a11yProps(1)}
          />
          <Tab
            className={`${classes.tabItem} ${value === 2 ? 'active' : ""}`}
            label={titleConstants.MONTH}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabPane}>
        <p>{ `1111 ${titleConstants.PEOPLE_HAS_ACCESSED}` }</p>
        <p>{ `222 ${titleConstants.PEOPLE_LIKE_THIS}` }</p>
        <p>{ `33 ${titleConstants.PEOPLE_OFFER}` }</p>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPane}>
        <p>{ `4444 ${titleConstants.PEOPLE_HAS_ACCESSED}` }</p>
        <p>{ `555 ${titleConstants.PEOPLE_LIKE_THIS}` }</p>
        <p>{ `66 ${titleConstants.PEOPLE_OFFER}` }</p>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPane}>
        <p>{ `7777 ${titleConstants.PEOPLE_HAS_ACCESSED}` }</p>
        <p>{ `888 ${titleConstants.PEOPLE_LIKE_THIS}` }</p>
        <p>{ `99 ${titleConstants.PEOPLE_OFFER}` }</p>
      </TabPanel>
    </div>
  );
}

HostTopInfoStatistical.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HostTopInfoStatistical);
