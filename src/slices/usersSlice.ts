import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUsers,
  fetchUserInfo,
  fetchUserAlbums,
  fetchUserTodos,
  fetchUserPosts,
} from "../api/usersApi";

const initialState = {
  users: [],
  userDetailsTab: 1,
  userInfo: [],
  userAlbums: [],
  userTodos: [],
  userPosts: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    switchUserDetailsTab: (state, action) => {
      state.userDetailsTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserAlbums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserAlbums.fulfilled, (state, action) => {
        state.loading = false;
        state.userAlbums = action.payload;
      })
      .addCase(fetchUserAlbums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.userTodos = action.payload;
      })
      .addCase(fetchUserTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.userPosts = action.payload;
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { switchUserDetailsTab } = usersSlice.actions;
export default usersSlice.reducer;
