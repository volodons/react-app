import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {},
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice;
