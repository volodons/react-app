import { configureStore } from "@reduxjs/toolkit";

// IMPORT ALL REDUCERS HERE

const store = configureStore({
  reducer: {
    posts: postsReducer,
    todos: todosReducer,
    users: usersReducer,
  },
});

export default store;
