import { populate } from "dotenv";
import { Job } from "../models/jobModel.js";

//for admin
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      salary,
      requirements,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !salary ||
      !requirements ||
      !location ||
      !companyId ||
      !experience ||
      !jobType ||
      !position
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      salary: Number(salary),
      requirements: requirements.split(","),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: userId,
    });
    return res.status(201).json({
      message: "Job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

//for student

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const Jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });
    if (!Jobs) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }
    return res.status(200).json({
      Jobs,
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

//code for how many jobs created by Admin

export const getJobsByAdmin = async (req, res) => {
  try {
    const adminId = req.id;
    const Jobs = await Job.find({ created_by: adminId });
    if (!Jobs) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }
    return res.status(200).json({
      Jobs,
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};
