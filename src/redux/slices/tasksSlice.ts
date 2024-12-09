import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadFromLocalStorage, Task , saveToLocalStorage} from '../../utilts/utilts';

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: loadFromLocalStorage<Task[]>('tasks') || [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      saveToLocalStorage('tasks', state.tasks);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      saveToLocalStorage('tasks', state.tasks);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        saveToLocalStorage('tasks', state.tasks);
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
