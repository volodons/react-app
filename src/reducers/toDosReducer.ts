import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {},
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
