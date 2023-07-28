import { baseApi } from "./baseApi";

const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
