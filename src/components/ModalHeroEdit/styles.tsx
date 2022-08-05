import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  outline: 0;
  background: white;
  border-radius: 8px;

  @media (max-width: 1114px) {
    width: 360px;
    height: 186px;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  margin: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
`;

export const CloseButton = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  max-width: 395px;
  width: 85%;
  padding-left: 10px;
  background: #efefef;
  border-radius: 20px;
  border-style: none;
  height: 38px;
`;

export const Label = styled.label`
  align-items: center;
  color: #525253;
  font-family: Poppins;
  font-size: 18px;
`;

export const InputMasks = styled(ReactInputMask)`
  max-width: 320px;
  background: #efefef;
  border-radius: 20px;
  min-width: 380px;
  max-height: 38px;
  padding: 20px;
  border-style: none;

  @media (max-width: 1440px) {
    max-width: 245px;
  }
  @media (max-width: 1114px) {
    min-width: 100px;
  }
`;
