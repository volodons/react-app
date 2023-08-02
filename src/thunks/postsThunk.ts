// import { fetchPosts } from "../api/postsApi";

// export const fetchPostsAsync = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: "FETCH_POSTS_PENDING" });
//       const posts = await fetchPosts();
//       dispatch({ type: "FETCH_POSTS_SUCCESS", payload: posts });
//     } catch (error) {
//       dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
//     }
//   };
// };

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    throw Error("Failed to fetch posts");
  }
});
