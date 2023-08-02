import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersPending, fetchUsersSuccess, fetchUsersFailure } =
  usersSlice.actions;
export default usersSlice.reducer;
