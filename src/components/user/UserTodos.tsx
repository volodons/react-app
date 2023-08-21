import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserTodos } from "../../api/usersApi";
import { toggleUserTodo } from "../../slices/usersSlice";

function UserTodos(): JSX.Element {
  const dispatch = useDispatch();
  const { userTodos, loading, error } = useSelector((state) => state.users);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchUserTodos(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user's ToDos</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          User {userId} ToDos
        </span>
      </h1>
      <ul className="list-disc list-inside">
        {userTodos.map((userTodo, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 hover:cursor-pointer`}
            onClick={() => dispatch(toggleUserTodo(userTodo.id))}
          >
            <div
              className={`w-4 h-4 m-2 rounded-full border-solid border-blue-500 border-2 ${
                userTodo.completed ? "bg-blue-500" : "bg-transparent"
              }`}
            ></div>
            <span
              className={`${
                userTodo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {userTodo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserTodos;
