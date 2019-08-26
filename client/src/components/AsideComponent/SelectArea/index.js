import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { FormControl, Select } from "@material-ui/core";
import { compose } from "redux";
import styles from "./styles";
import * as titleContant from "../../../constants/aside";

const renderSelectField = ({
  classes,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error} className={classes.selectForm}>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: "area"
      }}
    >
      {children}
    </Select>
  </FormControl>
);

renderSelectField.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  children: PropTypes.array,
};

function SelectArea(props) {
  const { classes } = props;

  return (
    <div className={classes.selectArea}>
      <form>
        <Field
          classes={classes}
          name="area"
          component={renderSelectField}
          label="Area"
        >
          <option value={0}>{titleContant.SELECT_THE_AREA}</option>
          <option value={1}>Tokyo</option>
          <option value={2}>Hiroshima</option>
          <option value={3}>Nawasaki</option>
        </Field>
      </form>
    </div>
  );
}

SelectArea.propTypes = {
  classes: PropTypes.object
};

const withReduxForm = reduxForm({
  form: titleContant.SELECT_THE_AREA
});

export default compose(
  withStyles(styles),
  withReduxForm
)(SelectArea);
