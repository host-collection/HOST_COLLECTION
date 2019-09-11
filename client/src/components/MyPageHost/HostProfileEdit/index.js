import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import renderTextField from "../../../commons/FormHelper/TextField";
import renderDatePicker from "../../../commons/FormHelper/DatePicker";
import renderSelectField from "../../../commons/FormHelper/SelectField";
import renderAvatarUpload from "../../../commons/FormHelper/AvatarUpload";
import renderSelectTags from "../../../commons/FormHelper/SelectTags";
import styles from "./styles";
import TitleChild from "../../TitleChild";
import * as titleConstants from "../../../constants/ui/myPage";

const bloodOptions = [
  { id: '', name: '' },
  { id: 'a', name: 'A' },
  { id: 'b', name: 'B' },
  { id: 'ab', name: 'AB' },
  { id: 'o', name: 'O' },
];

const zodiacOptions = [
  { id: '', name: '' },
  { id: 'aquarius', name: titleConstants.AQUARIUS },
  { id: 'pisces', name: titleConstants.PISCES },
  { id: 'aries', name: titleConstants.ARIES },
  { id: 'taurus', name: titleConstants.TAURUS },
  { id: 'gemini', name: titleConstants.GEMINI },
  { id: 'cancer', name: titleConstants.CANCER },
  { id: 'ieo', name: titleConstants.IEO },
  { id: 'virgo', name: titleConstants.VIRGO },
  { id: 'libra', name: titleConstants.LIBRA },
  { id: 'scorpio', name: titleConstants.SCORPIO },
  { id: 'sagittarius', name: titleConstants.SAGITTARIUS },
  { id: 'capricorn', name: titleConstants.CAPRICORN },
];

const renderBloodOptions = bloodOptions => {
  let result;
  if (bloodOptions.length > 0) {
    result = bloodOptions.map(option => {
      return (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      );
    });
  }
  return result;
};

const renderZodiacOptions = zodiacOptions => {
  let result;
  if (zodiacOptions.length > 0) {
    result = zodiacOptions.map(option => {
      return (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      );
    });
  }
  return result;
};

function HostProfileEdit(props) {
  const {
    classes, onUploadAvatar, imgUrl, loading, onChangeTags, userInfo
  } = props;

  return (
    <div className={classes.editProfile}>
      <TitleChild titleChild={titleConstants.EDIT_PROFILE} />
      <div className={classes.avatarUploader}>
        <Field
          name="avatar"
          component={renderAvatarUpload}
          onUploadAvatar={onUploadAvatar}
          imgUrl={imgUrl}
          loading={loading}
          userInfo={userInfo}
        />
      </div>
      <div className={classes.fieldGroup}>
        <div className={classes.textFieldTop}>
          <Field
            label={titleConstants.FULL_NAME}
            name="fullName"
            component={renderTextField}
            margin="normal"
          />
        </div>
        <div className={classes.textFieldTop}>
          <Field
            label={titleConstants.NICK_NAME}
            name="nickName"
            component={renderTextField}
            margin="normal"
          />
        </div>
        <div className={classes.textFieldTop}>
          <Field
            label={titleConstants.DATE_OF_BIRTH}
            name="dateOfBirth"
            component={renderDatePicker}
            margin="normal"
          />
        </div>
        <div className={classes.heightField}>
          <Field
            label={titleConstants.HEIGHT}
            name="height"
            component={renderTextField}
            margin="normal"
            type="number"
          />
        </div>
        <div className={classes.selectField}>
          <Field
            label={titleConstants.BLOOD_GROUP}
            name="bloodGroup"
            component={renderSelectField}
            option={renderBloodOptions(bloodOptions)}
          />
        </div>
        <div className={classes.selectField}>
          <Field
            label={titleConstants.ZODIAC}
            name="zodiac"
            component={renderSelectField}
            option={renderZodiacOptions(zodiacOptions)}
          />
        </div>
      </div>
      <div className={classes.textArea}>
        <Field
          label={titleConstants.OTHER_INFORMATION}
          name="otherInformation"
          component={renderTextField}
          multiline
          fullWidth
          margin="normal"
        />
      </div>
      <div className={classes.selectTags}>
        <label htmlFor="selectTags">
          {titleConstants.HASHTAGS}
        </label>
        <Field
          id="selectTags"
          label={titleConstants.HASHTAGS}
          name="selectTags"
          component={renderSelectTags}
          onChangeTags={onChangeTags}
        />
      </div>
      <div className={classes.contactForm}>
        <div className={classes.textFieldBottom}>
          <Field
            label={titleConstants.ADDRESS}
            name="address"
            component={renderTextField}
            margin="normal"
          />
        </div>
        <div className={classes.textFieldBottom}>
          <Field
            label={titleConstants.PHONE_NUMBER}
            name="phoneNumber"
            component={renderTextField}
            margin="normal"
          />
        </div>
        <div className={classes.textFieldBottom}>
          <Field
            label={titleConstants.LINE}
            name="line"
            component={renderTextField}
            margin="normal"
          />
        </div>
        <div className={classes.textFieldBottom}>
          <Field
            disabled
            label={titleConstants.EMAIL}
            name="email"
            component={renderTextField}
            margin="normal"
          />
        </div>
      </div>
    </div>
  );
}

HostProfileEdit.propTypes = {
  classes: PropTypes.object,
  onUploadAvatar: PropTypes.func,
  imgUrl: PropTypes.string,
  loading: PropTypes.bool,
  onChangeTags: PropTypes.func,
  userInfo: PropTypes.object
};

export default withStyles(styles)(HostProfileEdit);
