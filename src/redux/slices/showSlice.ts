import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShowState {
  show: boolean;
}

const initialState: ShowState = {
  show: false, 
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    setShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload; 
    },
  },
});

export const { setShow } = showSlice.actions;
export default showSlice.reducer;
