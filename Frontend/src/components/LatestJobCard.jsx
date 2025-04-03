import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCard = () => {
  return (
    <div className="p-5 border border-gray-200 rounded-md shadow-xl bg-white cursor-pointer">
      <div>
        <h1 className="font-bold text-[#6A38C2] text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-md text-[#2563eb] italic">Job Title</h1>
        <p className="text-sm italic">Job Description</p>
      </div>
      <div className="flex gap-2 mt-2">
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
    </div>
  );
};

export default LatestJobCard;
