import { Link } from "react-router-dom";

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>Error 404 - Page Not Found</h1>
      <p>
        Sorry, the page you requested was not found. Please check if the URL you
        entered is correct or return to the <Link to="/">home page</Link>
      </p>
    </>
  );
}

export default NotFoundPage;
