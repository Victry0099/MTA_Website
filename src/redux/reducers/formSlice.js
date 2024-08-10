import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  number: "",
  courses: "",
  trainingMode: "",
};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetForm: () => initialState,
  },
});

export const { setFormField, resetForm } = formSlice.actions;
export default formSlice.reducer;
