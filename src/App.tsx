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
          <Route exact path="/" element={<PostsList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/todos" element={<ToDoList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
