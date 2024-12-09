import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from "./slices/tasksSlice"
import showFormSlice from "./slices/showFormSlice"
import editTaskSlice from "./slices/editTaskSlice"
import showModalSlice from "./slices/showModalSlice"

const store = configureStore({
  reducer: {
    tasks:tasksSlice,
    showForm:showFormSlice,
    editTask:editTaskSlice,
    showModal:showModalSlice,
  },
});

export default store;