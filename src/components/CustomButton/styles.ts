import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';
import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
  border: none;
  text-align: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  color: ${(props) => props.color};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : 0)};
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  margin-left: ${(props) => (props.marginLeft ? `${props.marginLeft}px` : 0)};
  margin-right: ${(props) =>
    props.marginRight ? `${props.marginRight}px` : 0};
`;
