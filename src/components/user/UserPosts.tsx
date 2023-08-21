import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserPosts } from "../../api/usersApi";

function UserPosts(): JSX.Element {
  const dispatch = useDispatch();
  const { userPosts, loading, error } = useSelector((state) => state.users);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user's posts</div>;
  }

  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          User {userId} Posts
        </span>
      </h1>
      <div>
        {userPosts.map((userPost, index) => (
          <div key={index}>
            <p>
              <span className="font-bold">Title: </span>
              <span className="italic">{userPost.title}</span>
            </p>
            <p>
              <span className="font-bold">Text: </span>
              <span className="italic">{userPost.body}</span>
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPosts;
