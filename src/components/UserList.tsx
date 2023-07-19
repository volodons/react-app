import React from "react";
import Navigation from "./Navigation";

function UserList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1>This is User List!</h1>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        <li>User 4</li>
        <li>User 5</li>
      </ul>
    </>
  );
}

export default UserList;
