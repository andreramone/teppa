import React from 'react';

import { Container } from './styles';

interface IButton extends ButtonProps {
  children: string;
  onClick?: () => void;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftSpacing?: boolean;
  grayBackground?: string | boolean;
  grayShade?: string | boolean;
  ref?: any;
}

const Button: React.FC<IButton> = ({ children, onClick, ...rest }) => {
  return (
    <Container onClick={onClick} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;