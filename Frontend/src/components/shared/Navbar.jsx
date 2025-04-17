import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover.jsx";
import { Avatar, AvatarImage } from "../ui/avatar.jsx";
import { Button } from "../ui/button.jsx";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("User logged out successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center p-5 mx-auto max-w-7xl h-16">
        <div>
          <img
            src="/public/assets/logo2.png"
            alt="JobsMart"
            className="h-10 w-auto mt-4"
          />
        </div>
        <div className="gap-20 flex items-center mt-2">
          <ul className="flex font-medium items-center gap-5 text-[17px] font-serif mt-3 ">
            <li className="cursor-pointer hover:text-[#6A38C2] hover:underline">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer hover:text-[#6A38C2] hover:underline">
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            <li className="cursor-pointer hover:text-[#6A38C2] hover:underline">
              <Link to={"/browse"}>Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-1 mt-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="bg-[#e2e8f0] hover:bg-[#fbbf24] cursor-pointer"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className={"bg-[#2563eb] cursor-pointer"}>
                  Sign up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className={"w-12 h-12 mt-1 cursor-pointer"}>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-70">
                <div className="mt-3 ml-3">
                  <div className="flex gap-3">
                    <Avatar className="cursor-pointer mt-1">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold mt-1">Keshav Gangwar</h4>
                      <p className="text-sm italic text-muted-foreground">
                        Here is my Bio
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-5 text-gray-600">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                    <div className="flex items-center gap-1 w-fit">
                      <LogOut />
                      <Button
                        onClick={logoutHandler}
                        variant="link"
                        className={"cursor-pointer"}
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
