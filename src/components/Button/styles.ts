import styled from 'styled-components';
import { shade } from 'polished';
import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.grayBackground ? '#909391' : '#14834e'};
  border: none;
  border-radius: 8px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  height: 49px;
  width: 120px;
  margin-left: ${(props) => (props.leftSpacing ? 16 : 0)}px;

  &:hover {
    background: ${(props) =>
      props.grayShade ? shade(0.6, '#909391') : shade(0.2, '#14834e')};
  }
`;
