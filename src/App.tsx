import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsList from "./components/post/PostsList";
import UsersList from "./components/user/UsersList";
import ToDosList from "./components/toDo/ToDosList";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<PostsList />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/todos" element={<ToDosList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
