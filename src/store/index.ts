export interface AppState {
  user: string;
}
export interface UserState {
  status: boolean;
}

import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status:  false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    changeStatus: (state, action) => {
      state.status = action.payload;
    }
  },
});

export const { setUser,changeStatus } = userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
});