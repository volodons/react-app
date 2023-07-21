import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const toDosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: {},
  },
});

export const { addToDo } = toDosSlice.actions;
export default toDosSlice.reducer;
