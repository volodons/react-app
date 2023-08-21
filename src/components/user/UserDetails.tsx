import { useSelector, useDispatch } from "react-redux";
import { switchUserDetailsTab } from "../../slices/usersSlice";
import UserDetailsTab from "./UserDetailsTab";
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
        <UserDetailsTab tabNumber={1} currentTab={userDetailsTab}>
          User's Info
        </UserDetailsTab>
        <UserDetailsTab tabNumber={2} currentTab={userDetailsTab}>
          User's Albums
        </UserDetailsTab>
        <UserDetailsTab tabNumber={3} currentTab={userDetailsTab}>
          User's ToDos
        </UserDetailsTab>
        <UserDetailsTab tabNumber={4} currentTab={userDetailsTab}>
          User's Posts
        </UserDetailsTab>
      </div>
      <div>{userDetailsTab === 1 ? <UserInfo /> : null}</div>
      <div>{userDetailsTab === 2 ? <UserAlbums /> : null}</div>
      <div>{userDetailsTab === 3 ? <UserTodos /> : null}</div>
      <div>{userDetailsTab === 4 ? <UserPosts /> : null}</div>
    </div>
  );
}

export default UserDetails;
