import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../api/todosApi";
import { toggleTodo } from "../../slices/todosSlice";

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
          onClick={() => dispatch(toggleTodo(todo.id))}
          className={`hover:cursor-pointer ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.title}
        </li>
      ))}
    </>
  );
}

export default TodoItem;
