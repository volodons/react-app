import { useGetToDoQuery } from "../../api/jsonPlaceholderAPI";

function ToDoItem(): JSX.Element {
  const { data: toDos = [], error } = useGetToDoQuery();

  if (error) {
    return <div>Error loading toDos</div>;
  }

  return (
    <>
      {toDos.map((toDo) => (
        <li key={toDo.id}>{toDo.title}</li>
      ))}
    </>
  );
}

export default ToDoItem;
