import express from "express";
import isAuthenticated from "../middleware/Authenticated.js";
import {
  registerCommpany,
  getCompany,
  getCompanyById,
  updateCompany,
} from "../controller/companyController.js";

const router = express.Router();

//Register a User
router.route("/register").post(isAuthenticated, registerCommpany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyById);
router.route("/update/:id").put(isAuthenticated, updateCompany);

export default router;

//Now for company controller
