import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: number;
    name: string;
    status: 'Новая' | 'В работе' | 'Завершена';
    date: string;
}

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
