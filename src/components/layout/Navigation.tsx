import React from "react";
import { Link } from "react-router-dom";

function Navigation(): JSX.Element {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Posts List</Link>
          </li>
          <li>
            <Link to="/todos">ToDo List</Link>
          </li>
          <li>
            <Link to="/users">User List</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
