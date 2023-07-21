import Navigation from "../layout/Navigation";
import List from "../common/List";
import PostItem from "./PostItem";

function PostsList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1 className="underline self-center text-6xl">Posts List</h1>
      <List>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </List>
    </>
  );
}

export default PostsList;
