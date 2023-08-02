import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../api/usersApi";

function UserItem(): JSX.Element {
  const users = useSelector((state) => state.users.data);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) {
    return <div>Error loading users</div>;
  }

  return (
    <>
      {users.map((user) => (
        <li key={user.id}>
          Name: {user.name} Username: {user.username}
        </li>
      ))}
    </>
  );
}

export default UserItem;
