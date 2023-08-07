import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../api/todosApi";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleTodo: (state, action) => {
      const todoId = action.payload;
      const todoToToggle = state.todos.find((todo) => todo.id === todoId);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
