import { fetchPosts } from "../api/postsApi";

export const fetchPostsAsync = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POSTS_PENDING" });
      const posts = await fetchPosts();
      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: posts });
    } catch (error) {
      dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
    }
  };
};
