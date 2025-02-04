import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="fixed top-0 right-[200px] p-4">
      <li className="inline-block mr-4 mt-10">
        <Link
          to="/"
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          Home
        </Link>
      </li>
      <li className="inline-block">
        <Link
          to="/login"
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          Login
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;