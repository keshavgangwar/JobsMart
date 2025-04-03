import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Navigate, useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const JobId = "Keshav";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-300">
      <div className="flex items-center justify-between">
        <p className="text-sm italic test-gray-500">2 Days ago</p>
        <Button
          className={"rounded-full hover:bg-[#fbbf24]"}
          variant={"outline"}
          size={"icon"}
        >
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button className={"p-2"} variant={"outline"} size={"icon"}>
          <Avatar>
            <AvatarImage src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-md text-[#2563eb] italic">Job Title</h1>
        <p className="text-sm italic">Job Description</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-[#6A38C2] font-bold" variant={"ghost"}>
          10 Position
        </Badge>
        <Badge className="font-bold" variant={"ghost"}>
          Full time
        </Badge>
        <Badge className="text-[#fbbf24] font-bold" variant={"ghost"}>
          15 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Button
          onClick={() => navigate(`/description/${JobId}`)}
          variant={"outline"}
          className={"hover:bg-[#fbbf24] cursor-pointer"}
        >
          Details
        </Button>
        <Button className={"bg-[#6a38c2] cursor-pointer"}>
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
