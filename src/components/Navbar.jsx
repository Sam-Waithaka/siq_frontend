import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton"; 

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem("access_token"); // ✅ Check auth status

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div>
        <Link to="/" className="px-4 hover:text-gray-300">Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="px-4 hover:text-gray-300">Profile</Link>
            <LogoutButton /> {/* ✅ Show Logout if logged in */}
          </>
        ) : (
          <>
            <Link to="/login" className="px-4 hover:text-gray-300">Login</Link>
            <Link to="/register" className="px-4 hover:text-gray-300">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
