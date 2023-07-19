import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PostsList } from "./components/PostsList";
import { UserList } from "./components/UserList";
import { ToDoList } from "./components/ToDoList";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route path="/users" component={UserList} />
          <Route path="/todos" component={ToDoList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
