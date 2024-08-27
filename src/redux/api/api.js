import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const server = import.meta.env.VITE_API_SERVER_URL;
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: server }),
  endpoints: (builder) => ({
    sendContactForm: builder.mutation({
      query: (contactData) => ({
        url: "/api/v1/contact",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: contactData,
      }),
    }),
    registrationUser: builder.mutation({
      query: (userData) => ({
        url: "/api/v1/registration",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export default api;

export const { useSendContactFormMutation, useRegistrationUserMutation } = api;
