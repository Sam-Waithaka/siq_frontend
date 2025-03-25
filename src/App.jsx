import "./index.css"; 

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />  
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </>
  );
};

export default App;
