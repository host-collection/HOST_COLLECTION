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

export const fetchBannerAside = () => ({
  type: generalConstants.FETCH_BANNER_ASIDE
});

export const fetchBannerAsideSuccess = data => ({
  type: generalConstants.FETCH_BANNER_ASIDE_SUCCESS,
  payload: { data }
});

export const fetchBannerAsideFailed = error => ({
  type: generalConstants.FETCH_BANNER_ASIDE_FAILED,
  payload: { error }
});

export const fetchGeneralInfo = () => ({
  type: generalConstants.FETCH_GENERAL_INFORMATION
});

export const fetchGeneralInfoSuccess = data => ({
  type: generalConstants.FETCH_GENERAL_INFORMATION_SUCCESS,
  payload: { data }
});

export const fetchGeneralInfoFailed = (error) => ({
  type: generalConstants.FETCH_GENERAL_INFORMATION_FAILED,
  payload: { error }
});
