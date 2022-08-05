import React from 'react';

import { Container } from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shadeHover?: boolean;
  hoverColor?: boolean;
  backgroundColor?: string;
  color?: string;
  height?: number;
  radius?: number;
  width?: number;
  marginLeft?: number;
  marginRight?: number;
}

interface IButton extends ButtonProps {
  children: React.ReactElement | string;
  onClick: () => void;
  hoverColor?: boolean;
  shadeHover?: boolean;
  ref?: any;
}

const CustomButton: React.FC<IButton> = ({
  children,
  onClick,
  backgroundColor,
  color,
  shadeHover,
  height,
  width,
  radius,
  marginLeft,
  marginRight,
  hoverColor,
  ...rest
}) => {
  return (
    <Container
      onClick={onClick}
      type="button"
      color={color}
      width={width}
      height={height}
      radius={radius}
      hoverColor={hoverColor}
      marginLeft={marginLeft}
      marginRight={marginRight}
      backgroundColor={backgroundColor}
      shadeHover={shadeHover}
      {...rest}
    >
      {children}
    </Container>
  );
};

CustomButton.defaultProps = {
  shadeHover: false,
  hoverColor: false,
};

export default CustomButton;