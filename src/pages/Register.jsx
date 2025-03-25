import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", data);
      console.log("Registration Successful:", response.data);
      navigate("/");  // Redirect to login after successful registration
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input 
              type="text" 
              {...register("name", { required: "Name is required" })} 
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          
          <div>
            <label className="block font-medium">Email</label>
            <input 
              type="email" 
              {...register("email", { required: "Email is required" })} 
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <input 
              type="password" 
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} 
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Confirm Password</label>
            <input 
              type="password" 
              {...register("password2", { required: "Please confirm your password" })} 
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.password2 && <p className="text-red-500">{errors.password2.message}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
