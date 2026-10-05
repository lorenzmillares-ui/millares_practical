import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center dark:text-white">
      <h1 className="mb-3 text-3xl font-bold">Team Directory</h1>
      <p className="mb-4">Browse your team members and mark your favorites.</p>
      <Link to="/users" className="text-blue-600 underline dark:text-blue-400">Go to Users</Link>
    </div>
  );
}

export default Home;