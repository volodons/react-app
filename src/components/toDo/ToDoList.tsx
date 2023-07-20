import React from "react";
import Navigation from "../layout/Navigation";
import List from "../common/List";
import ToDoItem from "./ToDoItem";

function ToDoList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1>This is ToDo List!</h1>
      <List>
        <ToDoItem />
      </List>
    </>
  );
}

export default ToDoList;
