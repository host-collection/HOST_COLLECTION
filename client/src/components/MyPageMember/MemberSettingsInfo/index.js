import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { NavLink } from 'react-router-dom';
import renderTextField from "../../../commons/FormHelper/TextField";
import renderAvatarUpload from "../../../commons/FormHelper/AvatarUpload";
import Switches from "../../../commons/FormHelper/Switches";
import TitleChild from "../../TitleChild";
import styles from "./styles";
import validate from "./validate";
import * as titleConstants from "../../../constants/ui/myPage";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function MemberSettingsInfo(props) {
  const { classes, handleSubmit } = props;
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const [switchState, setSwitchState] = useState({
    snsUpdate: false,
    favoriteAnniversary: true,
    vibrate: true,
    sound: false,
    notificationLight: true
  });

  const onSubmitSettings = data => {
    console.log(data);
  };

  const onHandleSwitch = name => event => {
    setSwitchState({
      ...switchState,
      [name]: event.target.checked
    });
  };

  const onUploadAvatar = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImgUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmitSettings)}>
        <div className={classes.formGroup}>
          <TitleChild titleChild={titleConstants.NICK_NAME} />
          <Field
            id="nickname"
            label={titleConstants.NICK_NAME}
            name="nickname"
            component={renderTextField}
            className={classes.textField}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className={classes.formGroup}>
          <TitleChild titleChild={titleConstants.UPDATE_AVATAR} />
          <Field
            id="avatar"
            name="avatar"
            component={renderAvatarUpload}
            className={classes.textField}
            onUploadAvatar={onUploadAvatar}
            imgUrl={imgUrl}
            loading={loading}
          />
        </div>
        <div className={classes.formGroup}>
          <TitleChild titleChild={titleConstants.PUSH_NOTIFICATION} />
          <div className={classes.switchGroup}>

            <h5>{ titleConstants.SNS_UPDATE }</h5>
            <Switches
              checked={switchState.snsUpdate}
              onChange={onHandleSwitch("snsUpdate")}
              value="snsUpdate"
            />
          </div>
          <div className={classes.switchGroup}>
            <h5>{ titleConstants.FAVORITE_ANNIVERSARY }</h5>
            <Switches
              checked={switchState.favoriteAnniversary}
              onChange={onHandleSwitch("favoriteAnniversary")}
              value="favoriteAnniversary"
            />
          </div>
          <div className={classes.switchGroup}>
            <h5>{ titleConstants.VIBRATE }</h5>
            <Switches
              checked={switchState.vibrate}
              onChange={onHandleSwitch("vibrate")}
              value="vibrate"
            />
          </div>
          <div className={classes.switchGroup}>
            <h5>{ titleConstants.SOUND }</h5>
            <Switches
              checked={switchState.sound}
              onChange={onHandleSwitch("sound")}
              value="sound"
            />
          </div>
          <div className={classes.switchGroup}>
            <h5>{ titleConstants.NOTIFICATION_LIGHT }</h5>
            <Switches
              checked={switchState.notificationLight}
              onChange={onHandleSwitch("notificationLight")}
              value="notificationLight"
            />
          </div>
        </div>
        <div className={classes.buttonGroup}>
          <button type="submit">
            { titleConstants.SAVE }
          </button>
          <NavLink to="/my-page">
            { titleConstants.BACK }
          </NavLink>
        </div>
      </form>
    </div>
  );
}

MemberSettingsInfo.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func
};

const withReduxForm = reduxForm({
  form: titleConstants.MEMBER_SETTINGS_FORM_NAME,
  enableReinitialize: true,
  validate
});

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
  initialValues: {
    nickname: state.user.userInfo.nick_name
  }
});

const mapDispatchToProps = null;

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(MemberSettingsInfo);
