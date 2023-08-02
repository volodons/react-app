import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import postsReducer from "../slices/postsSlice";
import todosReducer from "../slices/todosSlice";
import usersReducer from "../slices/usersSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
  todos: todosReducer,
  users: usersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
