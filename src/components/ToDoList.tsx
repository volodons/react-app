import React from "react";
import Navigation from "./Navigation";

function ToDoList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1>This is ToDo List!</h1>
      <ul>
        <li>ToDo Item 1</li>
        <li>ToDo Item 2</li>
        <li>ToDo Item 3</li>
        <li>ToDo Item 4</li>
        <li>ToDo Item 5</li>
      </ul>
    </>
  );
}

export default ToDoList;
