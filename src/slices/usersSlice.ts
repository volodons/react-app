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
    toggleUserTodo: (state, action) => {
      const userTodoId = action.payload;
      const userTodoToToggle = state.userTodos.find(
        (userTodo) => userTodo.id === userTodoId
      );
      if (userTodoToToggle) {
        userTodoToToggle.completed = !userTodoToToggle.completed;
      }
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

export const { switchUserDetailsTab, toggleUserTodo } = usersSlice.actions;
export default usersSlice.reducer;
