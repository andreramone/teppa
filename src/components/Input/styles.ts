import styled, { css } from 'styled-components';

interface InputContainerProps {
  hasBottomMargin?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.p`
  margin-bottom: 8px;
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  justify-items: center;
  align-items: center;

  width: 360px;
  height: 48px;
  background: #ffffff;
  border-radius: 50px;

  padding-left: 16px;
  padding-right: 16px;

  ${(props) =>
    props.hasBottomMargin &&
    css`
      margin-bottom: 24px;
    `}

    input:focus{ outline: 0; }
`;

export const InputContent = styled.input`
  flex: 1;
  border: 0;
  background: transparent;

  ::placeholder {
    color: #ababab;
  }
`;

export const IconButton = styled.button`
  display: flex;
  justify-items: center;
  align-items: center;

  border: 0;
  background: transparent;
`;
