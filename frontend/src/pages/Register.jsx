import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    // Basic frontend validation
    if (!user.name || !user.email || !user.password || !user.role) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        user,
      );

      console.log(res.data);

      setMessage(res.data.message || "User registered successfully!");

      navigate("/home");

      setUser({
        name: "",
        email: "",
        password: "",
        role: "",
      });
    } catch (error) {
      console.log(error);

      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        
        {message && (
          <p className="bg-green-100 text-green-700 p-3 rounded mb-4">
            {message}
          </p>
        )}

      
        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>
        )}

        <form onSubmit={registerUser}>
          
          <div className="mb-4">
            <label className="block mb-2 font-medium">Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={user.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

    
          <div className="mb-6">
            <label className="block mb-2 font-medium">Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">role</label>

            <input
              type="text"
              name="role"
              placeholder="Enter your role"
              value={user.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
