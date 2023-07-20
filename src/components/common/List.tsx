import React from "react";

function List(props: { children: React.ReactNode }): JSX.Element {
  return <ul>{props.children}</ul>;
}

export default List;
