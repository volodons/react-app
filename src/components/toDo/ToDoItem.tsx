import { useGetTodosQuery } from "../../api/todosApi";

function TodoItem(): JSX.Element {
  const { data: todos = [], error } = useGetTodosQuery();

  if (error) {
    return <div>Error loading ToDo items</div>;
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
