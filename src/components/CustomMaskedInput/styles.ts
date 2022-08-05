import styled, { css } from 'styled-components';
import InputMasked from 'react-input-mask';

interface InputContainerProps {
  hasBottomMargin?: boolean;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  type?: string;
  isErrored: Boolean
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media (min-width: 1500px) {
   width: 90%
  }
`;
export const Text = styled.label`
  color: #525253;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 200;

     //-----------------
  @media (max-width: 1300px) {
    font-size: 12px;
  }

  @media (max-width: 1100px) {
    font-size: 12px;
  } 
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  justify-items: center;
  align-items: center;

  width: ${(props) => (props.width ? `${props.width}px` : '360px')};

  @media (max-width: 1024px) {
    width: 500px;
  }

  height: 48px;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#ffffff'};
  border-radius: 50px;

  padding-left: 16px;
  padding-right: 16px;

  ${(props) =>
    props.hasBottomMargin &&
    css`
      margin-bottom: 24px;
    `}

  ${(props) =>
    props.type === 'file' &&
    css`
      cursor: pointer;
      border-width: 1px;
      border-style: dotted;
      background: #ffffff;
      color: #525253;
      &:hover {
        background: #14834e;
        color: #ffffff;
      }
    `}
  ${(props) =>
    props.isErrored &&
    css`
    border: 2px solid #CA1818;
  `}

  @media (max-width: 1300px) {
    width: 17vw;
  }
  @media (max-width: 1100px) {
    width: 16vw;
  } 
  @media (max-width: 1024px) {
    width: 500px;
  }
`;

export const InputMasks = styled(InputMasked)`
  max-width: 320px;
  background: #efefef;
  border-radius: 20px;
  min-width: 240px;
  max-height: 38px;
  padding: 20px;
  border-style: none;

  @media (max-width: 1440px) {
    max-width: 245px;
  }
  @media (max-width: 1114px) {
    max-width: 180px;
  }
`;

export const MaskedInputContent = styled(InputMasked)`
  flex: 1;
  border: 0;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;

  ::placeholder {
    color: #ababab;
  }

  ::-webkit-file-upload-button {
    cursor: pointer;
    display: none;
  }
`;
