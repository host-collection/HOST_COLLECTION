import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants";

const URL_CHECK_USER = "api/login";

export const checkUser = (params = {}) => {
  return axiosService.post(
    `${API_ENDPOINT}/${URL_CHECK_USER}`,
    { email: params.email, password: params.password },
    null
  );
};
