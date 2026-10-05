import { Link } from "react-router-dom";
import Button from "./Button";

function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 dark:text-white">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{email}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{company}</p>
      <div className="mt-3 flex items-center gap-3">
        <Link to={`/users/${id}`} className="text-blue-600 underline dark:text-blue-400">
          View Details
        </Link>
        <Button
          label={isFavorite ? "Remove Favorite" : "Add Favorite"}
          onClick={onToggleFavorite}
          variant={isFavorite ? "danger" : "primary"}
        />
      </div>
    </div>
  );
}

export default UserCard;