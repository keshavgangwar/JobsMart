import { User } from "../models/userModel";
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
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  res.json({ message: "User registered successfully", success: true });
};

// To Register a User
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
    if (user.role !== role) {
      return res.status(400).json({
        message: "Account does not exit with current role",
        success: false,
      });
    }

    //generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.secret_key, {
      expiresIn: "2d",
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
        maxAge: 2 * 60 * 60,
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
    if (!fullname || !email || !phoneNumber || !bio || !skills) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const skillsArray = skills.split(",");
    const userId = req.id; //middleware authentication
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    // updating data
    user.fullname = fullname;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.bio = bio;
    user.skills = skillsArray;

    //resume comes later here
    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      phoneNumber: user.phoneNumber,
      profile: user.Profile,
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
