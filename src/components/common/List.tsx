function List(props: { children: React.ReactNode }): JSX.Element {
  return <ul className="list-disc">{props.children}</ul>;
}

export default List;
