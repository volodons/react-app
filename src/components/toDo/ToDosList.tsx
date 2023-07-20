import Navigation from "../layout/Navigation";
import List from "../common/List";
import ToDoItem from "./ToDoItem";

function ToDosList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1>ToDos List</h1>
      <List>
        <ToDoItem />
      </List>
    </>
  );
}

export default ToDosList;
