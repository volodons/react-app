import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../api/postsApi";
import { sendPost } from "../api/postsApi";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const userId = Math.floor(Math.random() * 10) + 1;
      const id = state.posts.length + 1;
      const post = action.payload;
      post.userId = userId;
      post.id = id;
      state.posts.push(post);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(sendPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendPost.fulfilled, (state) => {
        state.loading = false;
        // state.posts = state.posts.push(action.payload);
      })
      .addCase(sendPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
