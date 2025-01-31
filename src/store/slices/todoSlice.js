import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {},
    toggleTodo(state, action) {},
    removeTodo(state, action) {},
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
