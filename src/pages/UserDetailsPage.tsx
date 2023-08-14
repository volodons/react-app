import { Routes, Route } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import UserDetails from "../components/user/UserDetails";

function UserDetailsPage(): JSX.Element {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path=":userId" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default UserDetailsPage;
