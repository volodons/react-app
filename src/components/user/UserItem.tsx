import { useGetUsersQuery } from "../../api/jsonPlaceholderAPI";

function UserItem(): JSX.Element {
  const { data: users = [], error } = useGetUsersQuery();

  if (error) {
    return <div>Error loading users</div>;
  }

  return (
    <>
      {users.map((user) => (
        <li key={user.id}>
          User: {user.name}, Username: {user.username}
        </li>
      ))}
    </>
  );
}

export default UserItem;
