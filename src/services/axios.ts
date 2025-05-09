import axios from 'axios';
import { showNotification } from '@mantine/notifications';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
      showNotification({
        title: 'Hata!',
        message: 'Sunucuya bağlanırken bir hata oluştu.',
        color: 'red',
      });
    return Promise.reject(error); 
  }
);

export default axiosInstance;
