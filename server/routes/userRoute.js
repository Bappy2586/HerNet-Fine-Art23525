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
