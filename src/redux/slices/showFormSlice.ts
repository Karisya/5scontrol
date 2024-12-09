import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShowState {
  showForm: boolean;
}

const initialState: ShowState = {
  showForm: false, 
};

const showFormSlice = createSlice({
  name: 'showForm',
  initialState,
  reducers: {
    setShowForm: (state, action: PayloadAction<boolean>) => {
      state.showForm = action.payload; 
    },
  },
});

export const { setShowForm } = showFormSlice.actions;
export default showFormSlice.reducer;
