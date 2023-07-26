import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toDosApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getToDo: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useGetToDoQuery } = toDosApi;
