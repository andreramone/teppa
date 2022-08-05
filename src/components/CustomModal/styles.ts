import styled, { css } from 'styled-components';

interface Sizing {
  noMargin?: boolean;
}

interface IColors {
  status: 'success' | 'warning' | 'info';
}

const modalStatusColors = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  warning: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Wrapper = styled.div<IColors>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 20%;
  outline: 0;

  ${(props) => modalStatusColors[props.status || 'info']}

  border-radius: 8px;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 500;
`;

export const StyledModal = styled.div<Sizing>`
  margin: ${(props) => (props.noMargin ? 0 : 20)}px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  font-size: 18px;
`;

export const CloseButton = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  background: none;
`;

export const Content = styled.div<IColors>`
  display: flex;
  margin: 20px 0 20px;
  align-items: center;
  justify-content: center;

  ${(props) => modalStatusColors[props.status || 'info']}

  align-self: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
`;
