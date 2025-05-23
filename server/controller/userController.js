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








