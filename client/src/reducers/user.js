import * as userConstants from '../constants/events/user';

const initialState = {
  userInfo: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.FETCH_USER_INFO: {
      return {
        ...state,
        userInfo: {}
      };
    }
    case userConstants.FETCH_USER_INFO_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        userInfo: data,
      };
    }
    case userConstants.FETCH_USER_INFO_FAILED: {
      return {
        ...state,
        userInfo: {}
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
