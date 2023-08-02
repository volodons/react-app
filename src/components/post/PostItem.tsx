import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../thunks/postsThunk";

function PostItem(): JSX.Element {
  const { posts, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

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
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
}

export default PostItem;
