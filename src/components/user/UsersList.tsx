import Navigation from "../layout/Navigation";
import List from "../common/List";
import UserItem from "./UserItem";

function UsersList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1 className="underline self-center text-6xl">Users List</h1>
      <List>
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </List>
    </>
  );
}

export default UsersList;
