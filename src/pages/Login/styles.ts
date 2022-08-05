import styled from 'styled-components';
import { shade } from 'polished';
import Button from '../../components/Button/index';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  align-items: center;
  justify-content: center;

  background: url('https://www.comicbookherald.com/wp-content/uploads/2019/03/deepdish-marvel-1024x780.jpg') no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  opacity: 1;
`;

export const LoginLogo = styled.img`
  margin-bottom: 63px;
`;

export const LoginContainer = styled.div`
  display: flex;
  height: 582px;
  width: 456px;
  background: rgba(237, 237, 237, 0.2);
  backdrop-filter: blur(186px);
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  flex-direction: column;
`;

export const ForgotPasswordText = styled.a`
  margin-top: 8px;
  color: #fff;
  width: 100%;
  padding-left: 50px;
  font-weight: 400px;

  &:link {
    color: #fff;
  }

  &:visited {
    color: #fff;
  }

  &:hover {
    color: ${shade(0.2, '#fff')};
  }

  &:active {
    color: #fff;
  }
`;

export const FuturasseLogo = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 24px;
  margin-right: 48px;
`;

export const ButtonLogin = styled(Button)`
  margin-top: 35px;
`;
