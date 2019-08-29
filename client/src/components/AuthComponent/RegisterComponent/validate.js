import * as titleConstants from '../../../constants/ui/login';

const validate = values => {
  const errors = {};
  const { emailRegister, passwordRegister, rePasswordRegister } = values;
  if (!emailRegister) {
    errors.emailRegister = titleConstants.ENTER_YOUR_EMAIL;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailRegister)) {
    errors.emailRegister = titleConstants.INVALID_EMAIL;
  }

  if (!passwordRegister) {
    errors.passwordRegister = titleConstants.ENTER_YOUR_PASSWORD;
  } else if (passwordRegister.length < 5) {
    errors.passwordRegister = titleConstants.MORE_THAN_6;
  }
  if (!rePasswordRegister) {
    errors.rePasswordRegister = titleConstants.RETYPE_YOUR_PASSWORD;
  } else if (rePasswordRegister !== passwordRegister) {
    errors.rePasswordRegister = titleConstants.MUST_SAME;
  }
  return errors;
};

export default validate;
