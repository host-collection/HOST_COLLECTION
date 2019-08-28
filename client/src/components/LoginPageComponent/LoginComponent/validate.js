import * as titleConstants from '../../../constants/ui/login';

const validate = values => {
  const errors = {};
  const { email, password } = values;
  if (!email) {
    errors.email = titleConstants.ENTER_YOUR_EMAIL;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = titleConstants.INVALID_EMAIL;
  }
  if (!password) {
    errors.password = titleConstants.ENTER_YOUR_PASSWORD;
  }
  return errors;
};

export default validate;
