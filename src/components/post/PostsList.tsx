import Navigation from "../layout/Navigation";
import List from "../common/List";
import PostItem from "./PostItem";
import "../../index.css";

function PostsList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1 className="bg-orange-400 h-5">Posts List</h1>
      <List>
        <PostItem />
      </List>
    </>
  );
}

export default PostsList;
