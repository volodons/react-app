import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../store/store";
import { Post } from "../slices/postsSlice";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const state = store.getState();
  const posts = state.posts.posts;

  if (posts.length === 0) {
    try {
      const response = await axios.get<Post[]>(
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

export const sendPost = createAsyncThunk("sendPost", async (post: Post) => {
  const state = store.getState();
  const posts = state.posts.posts;

  try {
    const response = await axios.post<Post[]>(
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
    return response.data;
  } catch (error) {
    throw new Error("Failed to add post");
  }
});
