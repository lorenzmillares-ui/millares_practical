import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar({ favoritesCount, darkMode, onToggleDark }) {
  const linkClass = ({ isActive }) =>
    isActive ? "font-bold underline" : "hover:underline";

  return (
    <nav className="flex flex-wrap items-center gap-4 bg-white px-6 py-3 shadow dark:bg-gray-800 dark:text-white">
      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/users" className={linkClass}>Users</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <span className="ml-auto">Favorites: {favoritesCount}</span>
      <Button label={darkMode ? "Light Mode" : "Dark Mode"} onClick={onToggleDark} variant="primary" />
    </nav>
  );
}

export default Navbar;