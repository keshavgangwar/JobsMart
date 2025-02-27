import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      typeof: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["Student", "Recruiter"],
    },
    Profile: {
      bio: { type: String },
      skills: [{ type: String }],
      Resume: { type: String },
      ResumeOriginalName: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, Ref: "Company" },
      profilePicture: { type: String, default: "" },
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
