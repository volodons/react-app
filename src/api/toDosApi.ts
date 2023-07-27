import { baseApi } from "./baseApi";

const toDosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useGetToDosQuery } = toDosApi;
