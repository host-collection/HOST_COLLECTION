import axiosService from "../commons/axiosService";
import {
  API_ENDPOINT,
  GRANT_TYPE,
  SECRET_KEY,
  CONFIG_CHECK_USER
} from "../constants";

const URL_CHECK_USER = "oauth/token";

export const checkUser = (params = {}) => {
  return axiosService.post(
    `${API_ENDPOINT}/${URL_CHECK_USER}`,
    `${GRANT_TYPE}&username=${params.email}&password=${params.password}&${SECRET_KEY}`,
    CONFIG_CHECK_USER
  );
};
