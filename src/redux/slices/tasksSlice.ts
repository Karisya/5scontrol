import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  name: string;
  status: 'Новая' | 'В работе' | 'Завершена';
  date: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
