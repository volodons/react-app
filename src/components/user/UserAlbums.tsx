import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserAlbums } from "../../api/usersApi";
import { RootState } from "../../store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

function UserAlbums(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const { userAlbums, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const { userId } = useParams<{ userId?: string }>();

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserAlbums(userId));
    }
  }, [dispatch, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user's albums</div>;
  }

  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          User {userId} Albums
        </span>
      </h1>
      <div>
        {userAlbums.map((userAlbum, index) => (
          <p key={index}>
            <span className="font-bold">Title: </span>
            <span className="italic">{userAlbum.title}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default UserAlbums;
