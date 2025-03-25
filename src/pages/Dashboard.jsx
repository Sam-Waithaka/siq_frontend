import React from 'react';
import { LogOut, Home, User } from 'lucide-react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
            <p className="text-gray-600">Only authenticated users can see this page.</p>
          </div>

          <div className="text-center">
            <button 
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300 ease-in-out flex items-center justify-center"
            >
              <LogOut className="mr-2" size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;