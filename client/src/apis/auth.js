import axiosService from "../commons/axiosService";
import {
  API_ENDPOINT,
  CONFIG_GET_GENERAL_DATA,
  GRANT_TYPE,
  SECRET_KEY,
  CONFIG_CHECK_USER
} from "../constants";

const URL_SEARCH_USER = "api/search-user";
const URL_CHECK_USER = "oauth/token";

export const searchUser = params => {
  return axiosService.get(
    `${API_ENDPOINT}/${URL_SEARCH_USER}?q=${params}`,
    CONFIG_GET_GENERAL_DATA
  );
};

export const checkUser = (params = {}) => {
  return axiosService.post(
    `${API_ENDPOINT}/${URL_CHECK_USER}`,
    `${GRANT_TYPE}&username=${params.email}&password=${params.password}&${SECRET_KEY}`,
    CONFIG_CHECK_USER
  );
};
