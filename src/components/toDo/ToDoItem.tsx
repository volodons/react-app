import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../api/todosApi";

function TodoItem(): JSX.Element {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading todos</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => console.log(`You clicked on ToDo Number ${todo.id}`)}
          className="hover:cursor-pointer"
        >
          {todo.title}
        </li>
      ))}
    </>
  );
}

export default TodoItem;
