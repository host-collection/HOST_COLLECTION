import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from "../constants";

const URL_GET_USER_BY_TOKEN = 'api/user';

export const getUserInfo = (token) => {
  return axiosService.get(`${API_ENDPOINT}/${URL_GET_USER_BY_TOKEN}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });
};
