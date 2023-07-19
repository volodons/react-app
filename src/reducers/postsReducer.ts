import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {},
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
