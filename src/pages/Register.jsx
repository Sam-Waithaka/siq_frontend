import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setError(null);

    try {
      await axios.post("http://127.0.0.1:8000/api/register/", data);
      console.log("Registration Successful");
      navigate("/login");
    } catch (err) {
      setError("Registration failed");
      console.error("Registration Failed:", err.response?.data);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1"></div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
            <p className="text-gray-600">Register to get started</p>
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

          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.name && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.name.message}
                </motion.p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { 
                  required: "Email is required", 
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } 
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { 
                  required: "Password is required", 
                  minLength: { value: 6, message: "Password must be at least 6 characters" } 
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.password && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.password.message}
                </motion.p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("password2", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.password2 && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.password2.message}
                </motion.p>
              )}
            </div>
          </div>

          <motion.button 
            type="submit" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 ease-in-out"
          >
            Register
          </motion.button>

          <div className="text-center">
            <p className="text-gray-600">
              Already have an account? {' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;