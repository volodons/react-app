import Navigation from "../layout/Navigation";
import List from "../common/List";
import TodoItem from "./TodoItem";

function TodoList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1 className="underline self-center text-6xl">ToDo List</h1>
      <List>
        <TodoItem />
      </List>
    </>
  );
}

export default TodoList;
