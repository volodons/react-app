import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toDosApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useGetToDosQuery } = toDosApi;
