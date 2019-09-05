import * as titleConstants from '../../../constants/ui/myPage';

const validate = values => {
  const errors = {};
  const { nickname } = values;
  if (!nickname) {
    errors.nickname = titleConstants.PLEASE_ENTER_NICK_NAME;
  } else if (nickname.length > 15) {
    errors.nickname = titleConstants.MUST_BE_15;
  }
  return errors;
};

export default validate;
