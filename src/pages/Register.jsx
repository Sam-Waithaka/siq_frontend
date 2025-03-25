import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: "Name is required" })}
          className="block w-full p-2 border rounded mb-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
          className="block w-full p-2 border rounded mb-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
          className="block w-full p-2 border rounded mb-2"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
