import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';
import styles from './styles';
import * as titleConstants from '../../../constants/ui/myPage';

const renderImageUpload = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <ImageUploader
    type="file"
    buttonText={label}
    error={touched && invalid}
    withIcon
    helperText={touched && error}
    imgExtension={['.jpg', '.png']}
    maxFileSize={5242880}
    withPreview
    label={titleConstants.MAX_SIZE}
    fileSizeError={titleConstants.FILE_SIZE_ERROR}
    fileTypeError={titleConstants.FILE_TYPE_ERROR}
    {...input}
    {...custom}
  />
);

renderImageUpload.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object
};

export default withStyles(styles)(renderImageUpload);
