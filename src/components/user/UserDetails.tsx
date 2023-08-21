import { useSelector, useDispatch } from "react-redux";
import { switchUserDetailsTab } from "../../slices/usersSlice";
import UserInfo from "./UserInfo";
import UserAlbums from "./UserAlbums";
import UserTodos from "./UserTodos";
import UserPosts from "./userPosts";

function UserDetails(): JSX.Element {
  const dispatch = useDispatch();
  const { userDetailsTab } = useSelector((state) => state.users);

  return (
    <div className="p-8 flex flex-col items-center">
      <div className="flex gap-4">
        <button
          type="button"
          className={
            userDetailsTab === 1
              ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              : "bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          }
          onClick={() => dispatch(switchUserDetailsTab(1))}
        >
          User's Info
        </button>
        <button
          type="button"
          className={
            userDetailsTab === 2
              ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              : "bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          }
          onClick={() => dispatch(switchUserDetailsTab(2))}
        >
          User's Albums
        </button>
        <button
          type="button"
          className={
            userDetailsTab === 3
              ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              : "bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          }
          onClick={() => dispatch(switchUserDetailsTab(3))}
        >
          User's ToDos
        </button>
        <button
          type="button"
          className={
            userDetailsTab === 4
              ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              : "bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          }
          onClick={() => dispatch(switchUserDetailsTab(4))}
        >
          User's Posts
        </button>
      </div>
      <div>{userDetailsTab === 1 ? <UserInfo /> : null}</div>
      <div>{userDetailsTab === 2 ? <UserAlbums /> : null}</div>
      <div>{userDetailsTab === 3 ? <UserTodos /> : null}</div>
      <div>{userDetailsTab === 4 ? <UserPosts /> : null}</div>
    </div>
  );
}

export default UserDetails;
