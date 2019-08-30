import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess = (response) => response

  handleError = (error) => Promise.reject(error);

  get(url, config) {
    return this.instance.get(url, config);
  }

  post(url, body, config) {
    return this.instance.post(url, body, config);
  }
}

export default new AxiosService();
