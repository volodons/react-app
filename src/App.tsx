import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import UsersList from "./components/user/UsersList";
import ToDosList from "./components/toDo/ToDosList";
import NotFoundPage from "./pages/NotFoundPage";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/todos" element={<ToDosList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
