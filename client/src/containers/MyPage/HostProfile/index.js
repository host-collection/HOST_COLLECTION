import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { NavLink } from 'react-router-dom';
import { Prompt } from 'react-router';
import styles from "./styles";
import * as titleConstants from "../../../constants/ui/myPage";
import { HostProfileEdit, HostProfilePhotoUpload } from "../../../components/MyPageHost";
import validate from "./validate";

import axios from 'axios';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function HostProfile(props) {
  const { classes, handleSubmit, userInfo } = props;
  const [imgUrl, setImgUrl] = useState(userInfo.avatar);
  const [hashTags, setHashTags] = useState([]);
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isChange, setIsChange] = useState(false);

  const onSubmitProfile = (data) => {
    const {
      fullName,
      nickName,
      dateOfBirth,
      height,
      bloodGroup,
      zodiac,
      otherInformation,
      phoneNumber,
      email,
      line,
      address
    } = data;
    // console.log(data);
    // console.log(hashTags);
    // console.log(photoList);
    setIsChange(false);

    axios({
      method: 'put',
      url: `http://52.196.231.30/api/users/${userInfo.id}`,
      data: {
        name: fullName,
        nick_name: nickName,
        avatar: imgUrl,
        email,
        phone: phoneNumber,
        line,
        address,
        height,
        blood_group: bloodGroup,
        zodiac,
        date_of_birth: dateOfBirth,
        description: otherInformation,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log(res.data);
    });
  };

  const onChangeTags = tags => {
    setHashTags(tags);
    setIsChange(true);
  };

  const onUploadPhoto = ({ fileList }) => {
    setPhotoList([...fileList]);
    setIsChange(true);
  };

  const onUploadAvatar = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImgUrl(imageUrl);
        setIsChange(true);
        setLoading(false);
      });
    }
  };

  const onChangeReduxForm = () => {
    setIsChange(true);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmitProfile)} onChange={onChangeReduxForm}>
        <HostProfileEdit
          name="avatar"
          onUploadAvatar={onUploadAvatar}
          imgUrl={imgUrl}
          loading={loading}
          onChangeTags={onChangeTags}
          userInfo={userInfo}
        />
        <HostProfilePhotoUpload
          onUploadPhoto={onUploadPhoto}
          photoList={photoList}
        />
        <div className={classes.buttonGroup}>
          <button type="submit">
            { titleConstants.SAVE }
          </button>
          <NavLink to="/my-page">
            { titleConstants.BACK }
          </NavLink>
        </div>
      </form>
      <Prompt
        when={isChange}
        message={titleConstants.LEAVE_FORM_MESSAGE}
      />
    </div>
  );
}

HostProfile.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  userInfo: PropTypes.object
};

const withReduxForm = reduxForm({
  form: titleConstants.PROFILE_FORM_NAME,
  enableReinitialize: true,
  validate
});

const mapStateToProps = state => {
  const { userInfo } = state.user;
  return {
    userInfo,
    initialValues: {
      fullName: userInfo.name,
      nickName: userInfo.nick_name,
      dateOfBirth: userInfo.date_of_birth,
      height: userInfo.height,
      bloodGroup: userInfo.blood_group,
      zodiac: userInfo.zodiac,
      otherInformation: userInfo.description,
      phoneNumber: userInfo.phone,
      email: userInfo.email,
      line: userInfo.line,
      address: userInfo.address
    }
  };
};

const mapDispatchToProps = null;

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(HostProfile);
