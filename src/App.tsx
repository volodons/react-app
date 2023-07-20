import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsList from "./components/post/PostsList";
import UserList from "./components/user/UserList";
import ToDoList from "./components/toDo/ToDoList";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<PostsList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/todos" element={<ToDoList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
