import { useState } from "react";
import UserDetailsTab from "./UserDetailsTab";
import UserInfo from "./UserInfo";
import UserAlbums from "./UserAlbums";
import UserTodos from "./UserTodos";
import UserPosts from "./UserPosts";

function UserDetails(): JSX.Element {
  const [currentUserDetailsTab, setCurrentUserDetailsTab] = useState(1);

  return (
    <div className="p-8 flex flex-col items-center">
      <div className="flex gap-4">
        <UserDetailsTab
          tabNumber={1}
          currentTab={currentUserDetailsTab}
          onClick={() => setCurrentUserDetailsTab(1)}
        >
          User's Info
        </UserDetailsTab>
        <UserDetailsTab
          tabNumber={2}
          currentTab={currentUserDetailsTab}
          onClick={() => setCurrentUserDetailsTab(2)}
        >
          User's Albums
        </UserDetailsTab>
        <UserDetailsTab
          tabNumber={3}
          currentTab={currentUserDetailsTab}
          onClick={() => setCurrentUserDetailsTab(3)}
        >
          User's ToDos
        </UserDetailsTab>
        <UserDetailsTab
          tabNumber={4}
          currentTab={currentUserDetailsTab}
          onClick={() => setCurrentUserDetailsTab(4)}
        >
          User's Posts
        </UserDetailsTab>
      </div>
      <div>{currentUserDetailsTab === 1 ? <UserInfo /> : null}</div>
      <div>{currentUserDetailsTab === 2 ? <UserAlbums /> : null}</div>
      <div>{currentUserDetailsTab === 3 ? <UserTodos /> : null}</div>
      <div>{currentUserDetailsTab === 4 ? <UserPosts /> : null}</div>
    </div>
  );
}

export default UserDetails;
