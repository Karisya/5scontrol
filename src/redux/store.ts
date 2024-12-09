import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from "./slices/tasksSlice"
import showSlice from "./slices/showSlice"
import editTaskSlice from "./slices/editTaskSlice"

const store = configureStore({
  reducer: {
    tasks:tasksSlice,
    show:showSlice,
    editTask:editTaskSlice,
  },
});

export default store;