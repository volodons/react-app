import { useGetPostsQuery } from "../../api/postsApi";

function PostItem(): JSX.Element {
  const { data: posts = [], error } = useGetPostsQuery();

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
