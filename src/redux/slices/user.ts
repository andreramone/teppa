import { createSlice } from '@reduxjs/toolkit';
import internal from 'stream';

type UserState = {
  user: {
    id?: number;
    name?: string;
    email?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
  };
  token: string;
  isAuthenticated: boolean;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {} as UserState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = {};
      state.token = '';
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
