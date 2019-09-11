import 'date-fns';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import styles from './styles';


const renderDatePicker = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <DatePicker
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      format="MM/dd/yyyy"
      {...input}
      {...custom}
    />
  </MuiPickersUtilsProvider>
);

renderDatePicker.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object
};

export default withStyles(styles)(renderDatePicker);
