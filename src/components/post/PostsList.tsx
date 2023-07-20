import React from "react";
import Navigation from "../layout/Navigation";

function PostsList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1>This is Posts List!</h1>
      <ul>
        <li>Post 1</li>
        <li>Post 2</li>
        <li>Post 3</li>
        <li>Post 4</li>
        <li>Post 5</li>
      </ul>
    </>
  );
}

export default PostsList;
