import axios from 'axios';
import { MOVIE_DB_API_URL, MOVIE_DB_API_KEY } from '@/constants.js';

const apiClient = axios.create({
      timeout: 5000,
      baseURL: MOVIE_DB_API_URL,
      params: {
            'api_key': MOVIE_DB_API_KEY
      }
});

apiClient.interceptors.request.use(
      (config) => {
            return config;
      },
      (error) => {
            console.log(error);
            return Promise.reject();
      }
);

apiClient.interceptors.response.use(
      (response)  => {
            if(response.status === 200) {
                  return response
            } else {
                  return Promise.reject()
            }
      },
      (error) => {
            console.log(error);
            return Promise.reject();
      }
);

export default apiClient;