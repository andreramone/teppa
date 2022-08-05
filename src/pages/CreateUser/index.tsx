import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import Swal from 'sweetalert2';

import { authenticateUser } from '../../services/auth';

import Input from '../../components/Input';

import {
  Container,
  Content,
  LoginContainer,
  ForgotPasswordText,
  ButtonLogin,
} from './styles';

import { AppDispatch, RootState } from '../../redux/store';
import axios from 'axios';
import api from '../../services';

const CreateUser: React.FC = () => {
  const navigate = useNavigate();
 
  const [createUserEmail, setCreateUserEmail] = useState({
    email: '',
  });
  const [createUserPassword, setCreateUserPassword] = useState({
    password: '',
  });


  const onChangeEmail = (email: string) => {
    setCreateUserEmail({ ...createUserEmail, email });
  };

  const onChangePassword = (password: string) => {
    setCreateUserPassword({ ...createUserPassword, password });
  };

  const createUser = async () => {
    try {
        await api.post('/users', {
          email: createUserEmail,
          password: createUserPassword
        })
        .then((res) => {
          if (res.status === 200) {
            return Swal.fire({
              confirmButtonColor: '#14834e',
              text: 'Usuário cadastrado com sucesso!',
            });
          }
        })
        .catch((res) => {
         console.log(res)
        });
        navigate('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao cadastrar usuário.',
        confirmButtonColor: '#ff6b6b',
        allowEscapeKey: true,
      });
    }
  };

  return (
    <Container>
      <Content>
        <LoginContainer>
        <span style={{fontSize: '36px'}}> Crie sua conta:</span>
          <Input
            required
            onChangeValue={onChangeEmail}
            value={createUserEmail.email}
            text="E-mail"
            placeholder="exemplo@email.com.br"
            hasBottomMargin
          />
          <Input
            required
            onChangeValue={onChangePassword}
            value={createUserPassword.password}
            type="password"
            text="Senha"
            placeholder="• • • • • • •"
            onEnterKeyPress={createUser}
          />
          <ButtonLogin onClick={createUser}>Criar conta</ButtonLogin>
        </LoginContainer>
      </Content>
    </Container>
  );
};

export default CreateUser;
