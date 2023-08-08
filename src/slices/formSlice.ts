import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  body: "",
  validationErrors: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
    resetForm: (state) => {
      state.title = "";
      state.body = "";
      state.validationErrors = [];
    },
    setValidationErrors: (state, action) => {
      state.validationErrors = action.payload;
    },
  },
});

export const { setTitle, setBody, resetForm, setValidationErrors } =
  formSlice.actions;
export default formSlice.reducer;
