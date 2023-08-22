import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../api/postsApi";
import { RootState } from "../../store/store";

function PostItem(): JSX.Element {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading posts</div>;
  }

  return (
    <>
      {posts.map((post) => (
        <li key={post.id}>
          Title: {post.title} <br /> Text: {post.body}
        </li>
      ))}
    </>
  );
}

export default PostItem;
