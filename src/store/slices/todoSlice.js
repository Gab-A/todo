import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    newTodo: "",
    todos: [],
  },
  reducers: {
    setNewTodo(state, action) {
      state.newTodo = action.payload;
    },
    addTodo(state, action) {
      state.todos.push({
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      });
    },
    toggleTodo(state, action) {},
    removeTodo(state, action) {},
  },
});

export const { setNewTodo, addTodo, toggleTodo, removeTodo } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
