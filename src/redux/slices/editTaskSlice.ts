import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../utilts/utilts';

interface EditState {
  editTask: null | Task;
}

const initialState: EditState = {
  editTask: null, 
};

const editTaskSlice = createSlice({
  name: 'editTask',
  initialState,
  reducers: {
    setEditTask: (state, action: PayloadAction<Task|null>) => {
        state.editTask=action.payload;
    },
  },
});

export const { setEditTask } = editTaskSlice.actions;
export default editTaskSlice.reducer;
