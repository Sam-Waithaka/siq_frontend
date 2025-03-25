import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home, User, Menu } from "lucide-react";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("access_token"));
  const [menuOpen, setMenuOpen] = useState(false);

  // Listen for auth changes
  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(!!localStorage.getItem("access_token"));
    };

    window.addEventListener("storage", handleAuthChange);
    return () => window.removeEventListener("storage", handleAuthChange);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            User Management
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 flex items-center">
              <Home className="mr-2" size={20} /> Home
            </Link>
            {isAuthenticated && (
              <Link to="/profile" className="text-gray-700 hover:text-blue-600 flex items-center">
                <User className="mr-2" size={20} /> Profile
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <LogoutButton onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                <Link to="/register" className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
                  Register
                </Link>
              </>
            )}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link to="/" className="block text-gray-700 py-2">Home</Link>
          {isAuthenticated && <Link to="/profile" className="block text-gray-700 py-2">Profile</Link>}
          {isAuthenticated ? (
            <LogoutButton onLogout={() => setIsAuthenticated(false)} />
          ) : (
            <>
              <Link to="/login" className="block text-gray-700 py-2">Login</Link>
              <Link to="/register" className="block text-gray-700 py-2">Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
