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

export const fetchUserDetails = createAsyncThunk(
  "fetchUserDetails",
  async (userId) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user details");
    }
  }
);
