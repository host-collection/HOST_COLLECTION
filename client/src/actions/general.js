import * as generalApis from '../apis/general';
import * as generalConstants from '../constants/events/general';

export const fetchLocation = () => ({
  type: generalConstants.FETCH_LOCATION,
});

export const fetchLocationSuccess = data => ({
  type: generalConstants.FETCH_LOCATION_SUCCESS,
  payload: { data }
});

export const fetchLocationFailed = error => ({
  type: generalConstants.FETCH_LOCATION_FAILED,
  payload: { error }
});

export const fetchLocationRequest = () => {
  return dispatch => {
    dispatch(fetchLocation());
    generalApis
      .getLocation()
      .then(res => {
        dispatch(fetchLocationSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchLocationFailed(err));
      });
  };
};
