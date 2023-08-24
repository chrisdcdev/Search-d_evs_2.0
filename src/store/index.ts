export interface AppState {
  teste: string;
}

// store.ts (configuração da loja Redux)
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  teste: 'teste',
};

const reduxState = createSlice({
  name: 'states',
  initialState,
  reducers: {
    testee: (state) => {
      console.log(state);
    },
  },
});

export const { testee } = reduxState.actions;


export const store = configureStore({
  reducer: reduxState.reducer,
});