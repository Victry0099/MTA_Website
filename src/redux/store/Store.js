import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../reducers/formSlice";
import { api } from "../api/api";
import contactFormReducer from "../reducers/contactSlice";

export const store = configureStore({
  reducer: {
    forms: formReducer,
    contactForm: contactFormReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
