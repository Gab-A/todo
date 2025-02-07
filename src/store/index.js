import { configureStore } from "@reduxjs/toolkit";
import {
  todoReducer,
  setNewTodo,
  addTodo,
  toggleTodo,
  removeTodo,
} from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export { store, setNewTodo, addTodo, toggleTodo, removeTodo };
