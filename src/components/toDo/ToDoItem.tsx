import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../api/todosApi";

function TodoItem(): JSX.Element {
  const todos = useSelector((state) => state.todos.data);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (error) {
    return <div>Error loading todos</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
}

export default TodoItem;
