import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Upload, Icon } from "antd";
import styles from "./styles";
import "./styles.css";
import * as titleConstants from "../../../constants/ui/myPage";

function PhotoUpload(props) {
  const { classes, onUploadPhoto, photoList } = props;

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">{titleConstants.UPLOAD_PHOTO}</div>
    </div>
  );

  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={photoList}
        className={classes.avatarUpload}
        onChange={onUploadPhoto}
      >
        {uploadButton}
      </Upload>
    </>
  );
}

PhotoUpload.propTypes = {
  classes: PropTypes.object,
  onUploadPhoto: PropTypes.func,
  photoList: PropTypes.array
};

export default withStyles(styles)(PhotoUpload);
