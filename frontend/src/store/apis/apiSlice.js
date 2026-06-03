import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",

    prepareHeaders: (headers) => {
      const userInfo = JSON.parse(
        localStorage.getItem("userInfo")
      );

      if (userInfo?.token) {
        headers.set(
          "Authorization",
          `Bearer ${userInfo.token}`
        );
      }

      return headers;
    },
  }),

  tagTypes: ["Transaction"],

  endpoints: () => ({}),
});