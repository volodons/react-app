import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsList from "./components/PostsList";
import UserList from "./components/UserList";
import ToDoList from "./components/ToDoList";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={PostsList} />
          <Route path="/users" component={UserList} />
          <Route path="/todos" component={ToDoList} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
