import express from "express";
import isAuthenticated from "../middleware/Authenticated.js";
import {
  postJob,
  getAllJobs,
  getJobsByAdmin,
  getJobById,
} from "../controller/jobController.js";

const router = express.Router();

//Register a User
router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getJobsByAdmin").get(isAuthenticated, getJobsByAdmin);
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;
