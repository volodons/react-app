import { Link } from "react-router-dom";

function NotFoundPage(): JSX.Element {
  return (
    <div className="min-h-screen flex-col justify-center">
      <h1 className="m-10 text-6xl">Error 404 - Page Not Found</h1>
      <p className="font-semibold">
        Sorry, the page you requested was not found. Please check if the URL you
        entered is correct or return to the{" "}
        <Link to="/" className="text-blue-500 font-bold">
          home page
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
