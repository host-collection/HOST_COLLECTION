import * as authConstants from '../constants/events/auth';

const initialState = {
  userSearched: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.COMPARE_USER: {
      return {
        ...state,
        // userSearched: []
      };
    }
    case authConstants.COMPARE_USER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        userSearched: data
      };
    }
    case authConstants.COMPARE_USER_FAILED: {
      return {
        ...state,
        // userSearched: []
      };
    }
    default:
      return state;
  }
};

export default reducer;
