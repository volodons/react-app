import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
    getToDo: builder.query({
      query: () => "todos",
    }),
    getUsers: builder.query({
      query: () => "users",
    }),
  }),
});

export const { useGetPostsQuery, useGetToDoQuery, useGetUsersQuery } =
  jsonPlaceholderApi;
