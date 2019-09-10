import * as generalConstants from '../constants/events/general';
import * as message from '../constants/ui/aside';
import { mySwal as failedToast } from '../commons/AlertHelper';

const initialState = {
  locations: [],
  banners: [],
  generalInfo: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case generalConstants.FETCH_LOCATION: {
      return {
        ...state,
        locations: []
      };
    }
    case generalConstants.FETCH_LOCATION_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        locations: data
      };
    }
    case generalConstants.FETCH_LOCATION_FAILED: {
      failedToast(message.FETCH_LOCATION_FAILED_MESSAGE);
      return {
        ...state,
        locations: []
      };
    }
    case generalConstants.FETCH_BANNER_ASIDE: {
      return {
        ...state,
        banners: []
      };
    }
    case generalConstants.FETCH_BANNER_ASIDE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        banners: data
      };
    }
    case generalConstants.FETCH_BANNER_ASIDE_FAILED: {
      failedToast(message.FETCH_BANNER_ASIDE_FAILED_MESSAGE);
      return {
        ...state,
        banners: []
      };
    }
    case generalConstants.FETCH_GENERAL_INFORMATION: {
      return {
        ...state,
        generalInfo: []
      };
    }
    case generalConstants.FETCH_GENERAL_INFORMATION_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        generalInfo: data
      };
    }
    case generalConstants.FETCH_GENERAL_INFORMATION_FAILED: {
      failedToast(message.FETCH_GENERAL_INFO_FAILED_MESSAGE);
      return {
        ...state,
        generalInfo: []
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
