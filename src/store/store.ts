import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { jsonPlaceholderApi } from "../api/jsonPlaceholderAPI";
import postsReducer from "../reducers/postsReducer";
import usersReducer from "../reducers/usersReducer";
import toDosReducer from "../reducers/toDosReducer";

const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
