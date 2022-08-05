import styled, { css } from 'styled-components';
import Modal from '../../components/CustomModal';

interface FormBoxProps {
  hasGrid?: boolean;
  hasTable?: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: start;
  background: url('https://tm.ibxk.com.br/2019/04/22/22174711196117.jpg?ims=1120x420');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  flex: 1;
  padding: 48px 48px 48px 30px;
  flex-direction: column;

  color: #1f1e25;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 700;

  span {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const LeftTopContainer = styled.div`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

export const RightTopContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TabContainer = styled.div`
background: white;
border-radius: 8px;
`;

export const TabPanelContainer = styled.div``;

export const Text = styled.div`
  color: black;
  font-size: 20px;
  text-align: justify;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 100%;
  margin-bottom: 20px;
`;

export const FormBox = styled.div<FormBoxProps>`
  display: flex;

  ${(props) =>
    !props.hasTable
      ? css`
          flex: 1;
        `
      : css`
          max-height: 540px;
        `}
  flex-direction: column;
  padding: 24px;
  border-radius: 20px;
  background-color: #fff;

  color: #1f1e25;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;

  ${(props) =>
    props.hasGrid &&
    css`
      div {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 16px 82px;
        margin-top: 5px;

        > div {
          display: flex;
          align-items: center;
          //justify-content: center;
        }
      }
    `}

  @media (max-width: 1024px) {
    div {
      display: flex;
      //flex: 1;
      flex-direction: column;
      justify-content: space-between;
      //width: 100%;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        //justify-content: center;
      }
    }
  }

  @media (max-width: 1500px) {
    div {
      display: flex;
      //flex: 1;
      flex-direction: column;
      justify-content: space-between;
      //width: 100%;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        //justify-content: center;
      }
    }
  }
`;

export const FormOrigemContainer = styled.div`
  flex-direction: column;
  align-items: flex-start !important;
  gap: 0 15px !important;
`
export const InputOrigin = styled.input`
  background: #efefef;
  margin: 10px 0px;
  border-radius: 20px;
  min-width: 795px;
  max-height: 48px;
  padding: 20px;
  border-style: none;
`;

export const ModalInvalidRequisition = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  justify-self: start;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 21px;
  color: #525253;

  @media (min-width: 1500px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    justify-items: center;
  }
`;

export const Span = styled.span`
  align-items: flex-start;
`;

export const SpecialSpan = styled.span`
@media(max-width: 1500px){
  align-self: center;
}
`;

export const FileInput = styled.input`
  width: 280px;
  display: flex;
  border: 2px dashed #909391;
  height: 48px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  &::file-selector-button {
    border: 0;
    display: none;
  }

  &:hover {
    cursor: pointer;
    background: #14834e;
    color: white;
    border: 2px dashed white;

  }

  @media (max-width: 1440px) {
    max-width: 245px;
  }
  @media (max-width: 1114px) {
    max-width: 180px;
  }
`;

export const DropDown = styled.select`
  background: #efefef;
  margin: 10px 0px;
  border-radius: 50px;
  font-size: 18px;
  max-width: 260px;
  width: 100%;
  justify-content: flex-start;
  height: 48px;
  padding: 0 20px;
  border-style: none;
  font-family: 'Poppins';
`;

export const Option = styled.option`
  display: flex;
  width: 150px;
`;

export const TcurrencyInput = styled.input`
  background: #efefef;
  margin: 10px 0px;
  border-radius: 20px;
  min-width: 795px;
  max-height: 48px;
  padding: 20px;
  border-style: none;
  font-family: 'Poppins';
`;
