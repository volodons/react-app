import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPostPage from "../pages/AddPostPage";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import UserDetails from "../components/user/UserDetails";
import UserDetailsPage from "../pages/UserDetailsPage";
import TodosPage from "../pages/TodosPage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-post" element={<AddPostPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/*" element={<UserDetailsPage />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="/todos" element={<TodosPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
