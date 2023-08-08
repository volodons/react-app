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
      throw new Error("Failed to fetch posts");
    }
  } else {
    return posts;
  }
});

export const sendPost = createAsyncThunk("sendPost", async (post) => {
  const state = store.getState();
  const posts = state.posts.posts;

  try {
    await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: post.title,
        body: post.body,
        id: posts.length + 1,
        userId: Math.floor(Math.random() * 10) + 1,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );
  } catch (error) {
    throw new Error("Failed to add post");
  }
});
