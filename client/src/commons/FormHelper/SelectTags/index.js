import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Select } from "antd";
import styles from "./styles";
import './styles.css';
// import 'antd/dist/antd.css';

const renderSelectTags = ({
  label,
  onChangeTags
}) => (
  <Select
    mode="tags"
    style={{ width: "100%" }}
    placeholder={label}
    onChange={onChangeTags}
  />
);

renderSelectTags.propTypes = {
  label: PropTypes.string,
  onChangeTags: PropTypes.func
};

export default withStyles(styles)(renderSelectTags);
