
import { apiClient } from "./config";
import { useLoaderStore } from '@/store/loader.js';
import { storeToRefs } from 'pinia'

apiClient.interceptors.request.use(
      (config) => {
            // Handle loading
            const loadingInfo = useLoaderStore();
            const { isLoading } = storeToRefs(loadingInfo);
            isLoading.value = true;

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