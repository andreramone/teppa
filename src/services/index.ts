import axios from 'axios';
import Swal from 'sweetalert2';
import store from '../redux/store';
import { logoutUser } from '../redux/slices/user';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Sessão expirada',
          text: 'Realize o login novamente',
          confirmButtonColor: '#ff6b6b',
          allowEscapeKey: true,
          timer: 6000,
        });

        store.dispatch(
          logoutUser(),
          );
    }

    return error;
  },
);

api.interceptors.request.use(
  (config: any) => {
    const { token } = store.getState().user;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
