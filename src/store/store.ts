import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { postsApi } from "../api/postsApi";
import { toDosApi } from "../api/toDosApi";
import { usersApi } from "../api/usersApi";
import postsReducer from "../reducers/postsReducer";
import toDosReducer from "../reducers/toDosReducer";
import usersReducer from "../reducers/usersReducer";

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [toDosApi.reducerPath]: toDosApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    posts: postsReducer,
    toDos: toDosReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(toDosApi.middleware)
      .concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
