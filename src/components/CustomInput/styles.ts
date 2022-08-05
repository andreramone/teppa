import styled, { css } from 'styled-components';

interface InputContainerProps {
  hasBottomMargin?: boolean;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  type?: string;
  isErrored: Boolean
}

interface InputProps {
  type?: string;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  //width: 100%;
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
  font-size: 13px;
  font-weight: 200;
  max-width: 4vw;

 //----------
 @media (max-width: 1300px) {
    font-size: 12px;
  }

  // zoom 110%
  @media (max-width: 1100px) {
    font-size: 12px;
    max-width: 5vw;
  } 

  @media (min-width: 1500px) {
    max-width: 7vw;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;

  justify-items: center;
  align-items: center;
  
  width: ${(props) => (props.width ? `${props.width}px` : '360px')};

  height: ${(props) => (props.height ? `${props.height}px` : '48px')};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#ffffff'};
  border-radius: 50px;

  padding-left: 15px;
  padding-right: 12px;

  ${(props) =>
    props.hasBottomMargin &&
    css`
      margin-bottom: 24px;
    `}

  ${(props) =>
    props.type === 'file' &&
    css`
      cursor: pointer;
      border-height: 1px;
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

    input:focus{ outline: 0; }
   
  @media (max-width: 1300px) {
    width: 17vw;
  }

  // ZOOM 125%
  @media (max-width: 1100px) {
   width: 16vw;
  } 
  @media (max-width: 1024px) {
    width: 500px;
  }

`;

export const NormalInputContent = styled.input<InputProps>`
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

  @media (max-width: 1300px) {
    font-size: 12px;
  }
  @media (max-width: 1100px) {
    font-size: 10px;
  } 
`;
