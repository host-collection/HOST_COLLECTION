import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Upload, Icon, message } from "antd";
import styles from "./styles";
import './styles.css';
import * as titleConstants from '../../../constants/ui/myPage';

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

function AvatarUpload(props) {
  const {
    classes, onUploadAvatar, imgUrl, loading, userInfo
  } = props;

  const uploadButton = (
    <div>
      <Icon type={loading ? "loading" : "plus"} />
      <div className="ant-upload-text">
        {titleConstants.UPDATE_AVATAR}
      </div>
    </div>
  );

  const renderImg = () => {
    const URL_UPLOAD_AVATAR = 'http://52.196.231.30/upload/avatar';
    let result = '';
    if (imgUrl) {
      if (imgUrl === userInfo.avatar) {
        result = <img src={`${URL_UPLOAD_AVATAR}/${imgUrl}`} alt="avatar" />;
      } else {
        result = <img src={imgUrl} alt="avatar" />;
      }
    }
    return result;
  };

  return (
    <div className={classes.container}>
      { renderImg() }
      <Upload
        name="avatar"
        listType="picture-card"
        className={classes.avatarUpload}
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={onUploadAvatar}
      >
        { uploadButton }
      </Upload>
    </div>
  );
}

AvatarUpload.propTypes = {
  classes: PropTypes.object,
  onUploadAvatar: PropTypes.func,
  imgUrl: PropTypes.string,
  loading: PropTypes.bool,
  userInfo: PropTypes.object
};

export default withStyles(styles)(AvatarUpload);
