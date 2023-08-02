import Navigation from "../layout/Navigation";
import List from "../common/List";
import UserItem from "./UserItem";

function UsersList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1 className="mt-5 mb-5 underline self-center text-center text-6xl">
        Users List
      </h1>
      <List>
        <UserItem />
      </List>
    </>
  );
}

export default UsersList;
