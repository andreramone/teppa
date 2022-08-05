import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import Swal from 'sweetalert2';

import { authenticateUser } from '../../services/auth';

import Input from '../../../src/components/Input';

import {
  Container,
  Content,
  LoginContainer,
  ForgotPasswordText,
  ButtonLogin,
} from './styles';

import { AppDispatch, RootState } from '../../redux/store';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch<AppDispatch>();

  const onChangeEmail = (email: string) => {
    setLoginData({ ...loginData, email });
  };

  const onChangePassword = (password: string) => {
    setLoginData({ ...loginData, password });
  };

  const signIn = async () => {
    try {
      const userSchema = object({
        email: string().email().required(),
        password: string().required(),
      });
      const parsedUser = await userSchema.validate(loginData, { strict: true, abortEarly: false });
      const response = await authenticateUser(parsedUser);

      if (response) {
        return navigate('/hero/list');
      }
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

  useEffect(() => {
    if (isAuthenticated) navigate('/hero/list');
  }, [isAuthenticated, navigate]);

  return (
    <Container>
      <Content>
        <LoginContainer>

          <Input
            required
            onChangeValue={onChangeEmail}
            value={loginData.email}
            text="E-mail"
            placeholder="exemplo@email.com.br"
            hasBottomMargin
          />
          <Input
            required
            onChangeValue={onChangePassword}
            value={loginData.password}
            type="password"
            text="Senha"
            placeholder="• • • • • • •"
            onEnterKeyPress={signIn}
          />

          <ForgotPasswordText href="/create-user">Crie sua conta</ForgotPasswordText>

          <ButtonLogin onClick={signIn}>Entrar</ButtonLogin>
        </LoginContainer>
      </Content>
    </Container>
  );
};

export default Login;
