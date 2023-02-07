import axios from 'axios';
import { MOVIE_DB_API_URL, MOVIE_DB_API_KEY } from '@/constants.js';

export const apiClient = axios.create({
      timeout: 5000,
      baseURL: MOVIE_DB_API_URL,
      params: {
            'api_key': MOVIE_DB_API_KEY
      }
});