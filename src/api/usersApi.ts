import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { store } from "../store/store";
import {
  User,
  UserInfo,
  UserAlbum,
  UserTodo,
  UserPost,
} from "../slices/usersSlice";

export const fetchUsers = createAsyncThunk<User[]>("fetchUsers", async () => {
  const state = store.getState();
  const users = state.users.users;

  if (users.length === 0) {
    try {
      const response = await axios.get<User[]>(
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

export const fetchUserInfo = createAsyncThunk<UserInfo, string>(
  "fetchUserInfo",
  async (userId) => {
    const state = store.getState();
    const userInfo = state.users.userInfo;

    if (userInfo.length === 0) {
      try {
        const response = await axios.get<UserInfo>(
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

export const fetchUserAlbums = createAsyncThunk<UserAlbum, string>(
  "fetchUserAlbums",
  async (userId) => {
    const state = store.getState();
    const userAlbums = state.users.userAlbums;

    if (userAlbums.length === 0) {
      try {
        const response = await axios.get<UserAlbum>(
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

export const fetchUserTodos = createAsyncThunk<UserTodo, string>(
  "fetchUserTodos",
  async (userId) => {
    const state = store.getState();
    const userTodos = state.users.userTodos;

    if (userTodos.length === 0) {
      try {
        const response = await axios.get<UserTodo>(
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

export const fetchUserPosts = createAsyncThunk<UserPost, string>(
  "fetchUserPosts",
  async (userId) => {
    const state = store.getState();
    const userPosts = state.users.userPosts;

    if (userPosts.length === 0) {
      try {
        const response = await axios.get<UserPost>(
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
