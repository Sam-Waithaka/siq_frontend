import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LogoutButton from "../components/LogoutButton";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        setError("Failed to load profile");
        console.error("Profile Fetch Error:", err.response?.data);
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">User Profile</h2>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-md"
          >
            {error}
          </motion.div>
        )}

        {user ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                <strong className="text-gray-800">Name:</strong> {user.name}
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-800">Email:</strong> {user.email}
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-800">Joined:</strong> {new Date(user.date_joined).toLocaleDateString()}
              </p>
            </div>

            <LogoutButton />
          </motion.div>
        ) : (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600"
          >
            Loading profile...
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;