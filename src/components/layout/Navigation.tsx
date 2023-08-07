import { Link } from "react-router-dom";

function Navigation(): JSX.Element {
  return (
    <>
      <nav className="flex justify-center">
        <ul className="flex-col gap-20">
          <li>
            <Link to="/" className="text-blue-500 font-bold">
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/add-post" className="text-blue-500 font-bold">
              Add Post
            </Link>
          </li>
          <li>
            <Link to="/posts" className="text-blue-500 font-bold">
              Posts List
            </Link>
          </li>
          <li>
            <Link to="/todos" className="text-blue-500 font-bold">
              ToDo List
            </Link>
          </li>
          <li>
            <Link to="/users" className="text-blue-500 font-bold">
              Users List
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
