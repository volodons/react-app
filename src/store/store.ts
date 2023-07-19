import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../reducers/postsReducer";
import { usersReducer } from "../reducers/usersReducer";
import { toDosReducer } from "../reducers/toDosReducer";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    todos: toDosReducer,
  },
});

export default store;
