import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("access_token");
      
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        console.error("Profile Fetch Error:", err.response?.data);
        localStorage.removeItem("access_token");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {user ? (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Welcome back, {user.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                You're all set to manage your users and permissions efficiently.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  asChild 
                  className="px-6 py-3 text-base font-semibold"
                >
                  <Link to="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Manage Users with Ease
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A powerful, seamless, and intuitive user management system to simplify authentication, roles, and permissions.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  asChild 
                  variant="outline" 
                  className="px-6 py-3 text-base font-semibold"
                >
                  <Link to="/register">
                    Register
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="px-6 py-3 text-base font-semibold"
                >
                  <Link to="/login">
                    Login
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}