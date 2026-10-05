import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center dark:text-white">
      <h1 className="mb-3 text-3xl font-bold">404 Not Found</h1>
      <Link to="/" className="text-blue-600 underline dark:text-blue-400">Back to Home</Link>
    </div>
  );
}

export default NotFound;