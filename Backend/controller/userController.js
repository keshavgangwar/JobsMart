import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// To Register a User
export const register = async (req, res) => {
  try {
    const { fullname, email, password, role, phoneNumber } = req.body;
    if (!fullname || !email || !password || !role || !phoneNumber) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 7);
    await User.create({
      fullname,
      email,
      password: hashedPassword,
      role,
      phoneNumber,
    });
    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// To Login a User
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect username or password",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    //check role is correct or not
    if (user.role != role) {
      return res.status(400).json({
        message: "Account does not exit with current role",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    //generate JWT token
    const token = await jwt.sign(tokenData, process.env.secret_key, {
      expiresIn: "1d",
    });
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      phoneNumber: user.phoneNumber,
      profile: user.Profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome Back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

// to logout user
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// to update user profile
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, bio, skills, phoneNumber } = req.body;
    const file = req.file;

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }

    const userId = req.id; //middleware authentication
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    // updating data
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.Profile.bio = bio;
    if (skills) user.Profile.skills = skillsArray;

    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      phoneNumber: user.phoneNumber,
      Profile: user.Profile,
    };
    return res.status(200).json({
      message: "Profile updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
