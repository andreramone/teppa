import { createSlice } from '@reduxjs/toolkit';

type TableState = {
  selectedTableRowId: number | string;
  isToEdit: boolean;
};

export const tableSlice = createSlice({
  name: 'table',
  initialState: {} as TableState,
  reducers: {
    selectRow: (state, actions) => {
      state.selectedTableRowId = actions.payload;
    },
    wipeSelection: (state) => {
      state.selectedTableRowId = -1;
    },
    setIsToEdit: (state, actions) => {
      state.isToEdit = actions.payload;
    },
  },
});

export const { selectRow, wipeSelection, setIsToEdit } = tableSlice.actions;

export default tableSlice.reducer;