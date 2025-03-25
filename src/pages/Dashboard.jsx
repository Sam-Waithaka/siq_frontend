import React from 'react';

const handleLogout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  window.location.href = "/login"; // Redirect to login page
};

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
      <p>Only authenticated users can see this page.</p>
      <button 
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;