import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShowState {
  showModal: boolean;
  taskId: number | null;
}

const initialState: ShowState = {
  showModal: false, 
  taskId: null,
};

const showModalSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<{ showModal: boolean; taskId: number | null }>) => {
        state.showModal = action.payload.showModal;
        state.taskId = action.payload.taskId;
    },
  },
});

export const { setShowModal } = showModalSlice.actions;
export default showModalSlice.reducer;
