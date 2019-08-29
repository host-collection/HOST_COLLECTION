import axiosService from '../commons/axiosService';
import { API_ENDPOINT, CONFIG_GET_GENERAL_DATA } from '../constants';

const URL_SEARCH_USER = 'api/search-user';

export const searchUser = (params) => {
  return axiosService.get(
    `${API_ENDPOINT}/${URL_SEARCH_USER}?q=${params}`,
    CONFIG_GET_GENERAL_DATA
  );
};
