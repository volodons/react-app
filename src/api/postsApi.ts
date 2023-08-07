import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../store/store";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const state = store.getState();
  const posts = state.posts.posts;

  if (posts.length === 0) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch posts");
    }
  } else {
    return posts;
  }
});
