import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCard = ({ job }) => {
  return (
    <div className="p-5 border border-gray-200 rounded-md shadow-xl bg-white cursor-pointer">
      <div>
        <h1 className="font-bold text-[#6A38C2] text-lg">
          {job?.company?.name}
        </h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-md text-[#2563eb] italic">
          {job?.title}
        </h1>
        <p className="text-sm italic">{job?.description}</p>
      </div>
      <div className="flex gap-2 mt-2">
        <Badge className="text-[#6A38C2] font-bold" variant={"ghost"}>
          {job?.position} Position
        </Badge>
        <Badge className="font-bold" variant={"ghost"}>
          {job?.jobType}
        </Badge>
        <Badge className="text-[#fbbf24] font-bold" variant={"ghost"}>
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;
