import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  number: "",
  message: "",
};

const contactFormSlice = createSlice({
  name: "contactForms",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetForm: () => initialState,
  },
});

export const { setFormField, resetForm } = contactFormSlice.actions;
export default contactFormSlice.reducer;
