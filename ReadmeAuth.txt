server code(Backend)


server
   controller
     userController.js
   model
     userModel.js
   routes
     userRoute.js
index.js
.env





file_name(index.js)
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/userRoute.js"; // <-- fixed import path

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/", routes);

// Database connection
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

if (!PORT || !MONGOURL || !process.env.SECRET_KEY) {
  console.error("Missing required environment variables. Check your .env file.");
  process.exit(1);
}

mongoose
  .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port :${PORT}`);
    });
  })
  .catch((error) => console.log(error));









file_name(model/userModel.js)
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;









file_name(controller/userController.js)
import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "./passport.js";

const saltRounds = 10;

// Welcome
export const welcome = (req, res) => {
  res.send("<h1>Welcome to the server</h1>");
};

// Register
export const register = async (req, res) => {
  try {
    const { username, email, password, conformpassword } = req.body;

    if (!username || !email || !password || !conformpassword) {
      return res.status(400).json({ message: "Username, email, password, and confirm password are required." });
    }

    if (password !== conformpassword) {
      return res.status(400).json({ message: "Password and confirm password do not match." });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "Username or email already exists." });
    }

    const hash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ username, email, password: hash });
    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created successfully.",
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect password." });
    }

    const payload = { id: user._id, username: user.username };
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2d" });

    res.status(200).json({
      success: true,
      message: "User logged in successfully.",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Profile (protected)
export const profile = (req, res) => {
  res.status(200).json({
    success: true,
    user: {
      id: req.user._id,
      username: req.user.username,
    },
  });
};

// 404 handler
export const notFound = (req, res) => {
  res.status(404).json({ message: "Route not found." });
};

// Error handler
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
};









file_name(controller/passport.js)
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
import dotenv from "dotenv";
import User from "../model/userModel.js";

dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

passport.use(
  new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

export default passport;




// server/routes/userRoute.js
import express from "express";
import passport from "passport";
import {
  welcome,
  register,
  login,
  profile,
  notFound,
  errorHandler,
} from "../controller/userController.js";

const router = express.Router();

// Welcome route
router.get("/", welcome);

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Profile route (protected)
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  profile
);

// 404 handler for unknown routes
router.use(notFound);

// Global error handler
router.use(errorHandler);

export default router;









file_name(.env)
PORT=8000
MONGO_URL=mongodb://localhost:27017/mern
SECRET_KEY=HelloWorld











client(Frontend)

src
 component
   auth
     Register.js
     Login.js
     Profile.js


src/component/Register.js
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
      .get("http://localhost:8000/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then(() => navigate("/profile"))
      .catch(() => {
        navigate("/register");
      });
  }, []);

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
        console.error("Registration failed:", error.response.data.message);
        alert(error.response.data.message || "Registration failed");
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







src/component/Profile.js
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








src/component/Login.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then(() => navigate("/profile"))
      .catch(() => {
        navigate("/login");
      });
  }, []);

  const handleLogin = () => {
    axios
      .post("http://localhost:8000/login", { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("User logged in successfully");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login failed:", error.response.data.message);
        alert(error.response.data.message || "Login failed");
      });
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
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
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
     <button
  type="submit"
  onClick={handleLogin}
  style={{
    fontSize: "14px",
    padding: "2px 12px",
    backgroundColor: "#cceeff",
    border: "1px solid #99ddff",
    borderRadius: "4px",
    color: "#003366",
    cursor: "pointer",
  }}
>
  Login
</button>

      <p  style={{
      background: "White"}}>
      Don't have an account?{" "}
  <button
    onClick={() => navigate("/register")}
    style={{
      background: "White",
      border: "none",
      color: "#80bfff",
      cursor: "pointer",
      fontSize: "18px",
      padding: 0,
    }}
  >
    Register
  </button>
</p>
    </div>
  );
};

export default Login;






App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";
import LoanCalculator from "./component/LoanCalculator";
import NidInfo from "./component/NidInfo";
import MobileInfo from "./component/MobileInfo";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import UserProfile from "./UserProfile";
import FileUpload from "./component/FileUpload";
import FileDownload from "./component/FileDownload";
import Role from "./page/Role";
import RoleManagement from "./page/RoleManagement";
import AssignRole from "./page/AssignRole";
import AssignFunction from "./page/AssignFunction";
import CreateUser from "./page/CreateUser";
import Footer from "./Footer";
import About from "./component/About";
import Artist from "./component/arts/Artis";
import AboutUs from "./component/AboutUs/AboutUs";
import ArtEvent from "./component/ArtEvent/ArtEvent";
import ArtMarket from "./component/ArtMarket/ArtMarket";
import PreOwnedArts from "./component/PreOwnedArt/PreOwnedArt";
import Buy from "./component/Buy/Buy";
import Gallery from "./component/Galleries/Galleries";
import ContactUs from "./component/ContactUs/ContactUs";
import ArtistProfile from "./component/ArtistProfile/ArtistProfile";
import ArtOrg from "./component/ArtOrg/ArtOrg";
import ArtHistory from "./component/ArtHistory/ArtHistory";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Profile from "./component/auth/Profile";
import Dashboard from "./component/AdminDashboard/Dashboard";
import ArtistCategoryList from './component/AdminDashboard/Artist/ArtistCategoryList';
import AddArtistCategory from "./component/AdminDashboard/Artist/AddArtistCategory";
import ArtistProfileList from "./component/AdminDashboard/Artist/ArtistProfileList";
import AddArtistProfile from "./component/AdminDashboard/Artist/AddArtistProfile";
// import AddArtMarket from "./component/AdminDashboard/ArtMarket/AddArtMarket"; // Uncomment if needed

import "./App.css";

function App() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://via.placeholder.com/100",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/nid-info" element={<NidInfo />} />
          <Route path="/mobile-info" element={<MobileInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/userProfile" element={<UserProfile user={user} />} />
          <Route path="/fileUpload" element={<FileUpload />} />
          <Route path="/fileDownload" element={<FileDownload />} />
          <Route path="/role" element={<Role />} />
          <Route path="/roleManagement" element={<RoleManagement />} />
          <Route path="/assignRole" element={<AssignRole />} />
          <Route path="/assignFunction" element={<AssignFunction />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/artis" element={<Artist />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/artEvent" element={<ArtEvent />} />
          <Route path="/artMarket" element={<ArtMarket />} />
          <Route path="/preOwnedArts" element={<PreOwnedArts />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/artistProfile" element={<ArtistProfile />} />
          <Route path="/artOrg" element={<ArtOrg />} />
          <Route path="/artHistory" element={<ArtHistory />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/artist-categories" element={<ArtistCategoryList />} />
          <Route path="/addArtistCategory" element={<AddArtistCategory />} />
          <Route path="/artistProfileList" element={<ArtistProfileList />} />
          <Route path="/add-artist" element={<AddArtistProfile />} />
          {/* <Route path="/addArtMarket" element={<AddArtMarket />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
//<Route path="/addArtMarket" element={<AddArtMarket/>}/>