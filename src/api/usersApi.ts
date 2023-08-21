import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { store } from "../store/store";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const state = store.getState();
  const users = state.users.users;

  if (users.length === 0) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  } else {
    return users;
  }
});

export const fetchUserInfo = createAsyncThunk(
  "fetchUserInfo",
  async (userId) => {
    const state = store.getState();
    const userInfo = state.users.userInfo;

    if (userInfo.length === 0) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch user's info");
      }
    } else {
      return userInfo;
    }
  }
);

export const fetchUserAlbums = createAsyncThunk(
  "fetchUserAlbums",
  async (userId) => {
    const state = store.getState();
    const userAlbums = state.users.userAlbums;

    if (userAlbums.length === 0) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}/albums`
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch user's albums");
      }
    } else {
      return userAlbums;
    }
  }
);

export const fetchUserTodos = createAsyncThunk(
  "fetchUserTodos",
  async (userId) => {
    const state = store.getState();
    const userTodos = state.users.userTodos;

    if (userTodos.length === 0) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}/todos`
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch user's todos");
      }
    } else {
      return userTodos;
    }
  }
);

export const fetchUserPosts = createAsyncThunk(
  "fetchUserPosts",
  async (userId) => {
    const state = store.getState();
    const userPosts = state.users.userPosts;

    if (userPosts.length === 0) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}/posts`
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch user's posts");
      }
    } else {
      return userPosts;
    }
  }
);
