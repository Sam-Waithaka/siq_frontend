import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Remove tokens from localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    console.log("User logged out");

    // ✅ Redirect to login page
    navigate("/login");
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
