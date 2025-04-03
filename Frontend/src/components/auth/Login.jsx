import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success("User logged in successfully");
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
          <h1 className="font-bold text-xl mb-5 text-center">Login</h1>
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
          {loading ? (
            <Button className={"w-full my-2"}>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait..
            </Button>
          ) : (
            <Button className="w-full my-2 cursor-pointer" type="submit">
              Login
            </Button>
          )}
          <span className="italic text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="italic text-md font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
