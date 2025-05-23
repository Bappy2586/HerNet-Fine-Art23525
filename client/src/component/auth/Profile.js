import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("Profile data fetched successfully:", res.data.user);
        setUser(res.data.user);
      })
      .catch(() => {
        alert("You are not logged in. Redirecting to login page...");
        navigate("/login");
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>User ID:</strong> {user.id}
      </p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;


