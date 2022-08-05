import { createSlice } from '@reduxjs/toolkit';

type ModalState = {
  isShown: boolean;
  receiptHeaderTitle?: string;
  actionType?: 'register' | 'update';
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {} as ModalState,
  reducers: {
    openModal: (state) => {
      state.isShown = !state.isShown;
    },
    setModalProps: (state, actions) => {
      // state.actionType = actions.payload?.actionType;
      // state.receiptHeaderTitle = actions.payload?.receiptHeaderTitle;y

    },
  },
});

export const { openModal, setModalProps } = modalSlice.actions;

export default modalSlice.reducer;
