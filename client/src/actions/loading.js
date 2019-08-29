import * as uiTypes from '../constants/events/loading';

export const showLoading = () => ({
  type: uiTypes.SHOW_LOADING
});

export const hideLoading = () => ({
  type: uiTypes.HIDE_LOADING
});
