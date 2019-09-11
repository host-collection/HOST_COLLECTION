/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import styles from "./styles";

const renderSelectField = ({
  input,
  label,
  meta: { touched, invalid },
  option,
  ...custom
}) => (
  <FormControl>
    <InputLabel>{label}</InputLabel>
    <Select
      native
      error={touched && invalid}
      {...input}
      {...custom}
    >
      {option}
    </Select>
  </FormControl>
);

renderSelectField.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  option: PropTypes.any
};

export default withStyles(styles)(renderSelectField);
