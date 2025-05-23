import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then(() => navigate("/profile"))
      .catch(() => {
        navigate("/register");
      });
  }, [navigate]);

  const handleRegister = () => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)) {
      alert("Please enter a valid Gmail address");
      return;
    }

    axios
      .post("http://localhost:8000/register", {
        username,
        email,
        password,
        conformpassword: conformPassword,
      })
      .then(() => {
        console.log("User is registered successfully");
        navigate("/login");
      })
      .catch((error) => {
        const message = error?.response?.data?.message || error.message || "Registration failed";
        console.error("Registration failed:", message);
        alert(message);
      });
  };

  return (
    <div className="register-container">
      <h2>Register Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={conformPassword}
        onChange={(e) => {
          setConformPassword(e.target.value);
        }}
        required
      />
      <button type="submit" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;