import { configureStore } from "@reduxjs/toolkit";
import {
  todoReducer,
  addTodo,
  toggleTodo,
  removeTodo,
} from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export { store, addTodo, toggleTodo, removeTodo };
