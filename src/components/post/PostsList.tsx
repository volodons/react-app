import Navigation from "../layout/Navigation";
import List from "../common/List";
import PostItem from "./PostItem";

function PostsList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1 className="mt-5 mb-5 underline self-center text-center text-6xl">
        Posts List
      </h1>
      <List>
        <PostItem />
      </List>
    </>
  );
}

export default PostsList;
