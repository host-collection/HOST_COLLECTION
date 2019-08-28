import axiosService from '../commons/axiosService';
import { API_ENDPOINT, CONFIG_GET_GENERAL_DATA } from '../constants';

const URL_FETCH_LOCATION = 'api/location';

export const getLocation = async () => {
  const result = await axiosService.get(`${API_ENDPOINT}/${URL_FETCH_LOCATION}`, CONFIG_GET_GENERAL_DATA);
  return result;
};
