import axios, { AxiosResponse } from 'axios';
import Swal from 'sweetalert2';

import store from '../../redux/store';
import { loginUser } from '../../redux/slices/user';

import { IAuthenticateUser, IAuthenticateUserResponse } from './types';
import api from '..';

export const authenticateUser = async ({
  email,
  password,
}: IAuthenticateUser): Promise<IAuthenticateUserResponse | undefined> => {
  try {
    const response: AxiosResponse<IAuthenticateUserResponse> = await api.post(
      '/auth',
      { email, password },
    );

    store.dispatch(
      loginUser({
        user: response.data.user,
        token: response.data.token,
      }),
    );
    return response.data;

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email ou senha incorretos.',
      confirmButtonColor: '#ff6b6b',
      allowEscapeKey: true,
    });
  }
};