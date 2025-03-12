import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controller/userController.js";
import isAuthenticated from "../middleware/Authenticated.js";

const router = express.Router();

//Register a User
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;

//Now for company controller
