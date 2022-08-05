import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModal } from '../../redux/slices/modal';

import {
  Wrapper,
  Header,
  StyledModal,
  CloseButton,
  Content,
  Backdrop,
} from './styles';

import { AppDispatch, RootState } from '../../redux/store';

export interface CustomModalProps {
  message: string;
  status: 'success' | 'warning' | 'info';
  noMargin?: boolean;
}

const CustomModal: FunctionComponent<CustomModalProps> = ({
  message,
  status,
  noMargin,
}) => {
  const { isShown } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(openModal());
  };

  return isShown ? (
    <>
      <Backdrop />
      <Wrapper status={status}>
        <StyledModal noMargin={noMargin}>
          <Header>
            <CloseButton onClick={handleClick}>
              x
            </CloseButton>
          </Header>

          <Content status={status}>{message}</Content>
        </StyledModal>
      </Wrapper>
    </>
  ) : null;
};

export default CustomModal;
