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
    toggleTodo(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setNewTodo, addTodo, toggleTodo, removeTodo } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
