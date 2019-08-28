import * as generalConstants from '../constants/events/general';

const initialState = {
  location: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case generalConstants.FETCH_LOCATION: {
      return {
        ...state,
      };
    }
    case generalConstants.FETCH_LOCATION_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        location: data
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
