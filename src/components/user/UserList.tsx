import React from "react";
import Navigation from "../layout/Navigation";
import List from "../common/List";
import UserItem from "./UserItem";

function UserList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1>This is User List!</h1>
      <List>
        <UserItem />
      </List>
    </>
  );
}

export default UserList;
