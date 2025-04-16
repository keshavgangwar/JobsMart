import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CloudName,
  api_key: process.env.API_Key,
  api_secret: process.env.API_Secret_Key,
  secure: true,
});

export default cloudinary;
