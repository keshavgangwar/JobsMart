import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success("User registered successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/3 border border-gray-300 rounded-md p-8 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center">Sign Up</h1>
          <div className="my-2">
            <Label htmlFor="name" className="mb-1">
              Full Name
            </Label>
            <Input
              type="text"
              name="fullname"
              onChange={changeEventHandler}
              id="fullname"
              value={input.fullname}
              className="w-full p-2 border border-gray-300 rounded-sm h-8 italic text-[15px]"
              placeholder="Keshav Gangwar"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="email" className="mb-1">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              id="email"
              className="w-full p-2 border border-gray-300 rounded-sm h-8 italic text-[15px]"
              placeholder="keshav123@example.com"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="phone" className="mb-1">
              Phone
            </Label>
            <Input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              id="phoneNumber"
              className="w-full p-2 border border-gray-300 rounded-sm h-8 italic text-[15px]"
              placeholder="8449xxx377"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="password" className="mb-1">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              id="password"
              className="w-full p-2 border border-gray-300 rounded-sm h-8 italic text-[15px]"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  id="Student"
                  name="role"
                  className="cursor-pointer"
                />
                <Label htmlFor="Student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  id="Recruiter"
                  name="role"
                  className="cursor-pointer"
                />
                <Label htmlFor="Recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="Photo" className={"my-2"}>
              Upload Photo
            </Label>
            <Input
              accept="image/*"
              type="file"
              name="Photo"
              onChange={changeFileHandler}
              id="Photo"
              className="w-full cursor-pointer my-2 italic hover:bg-[#fbbf24] hover:text-grey-900 bg-gradient-to-r from-[#fbbf24] to-transparent"
            />
          </div>
          {loading ? (
            <Button className={"w-full my-2"}>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait..
            </Button>
          ) : (
            <Button className="w-full my-2 cursor-pointer" type="submit">
              Sign Up
            </Button>
          )}
          <span className="italic text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="italic text-md font-semibold hover:underline"
            >
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
