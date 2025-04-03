import React from "react";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center my-10">
      <span className="px-4 py-2 rounded-full bg-gray-100 text-[#7e22ce] font-medium">
        Great Jobs. Greater Talent.
      </span>
      <h1 className="text-5xl font-bold mt-10">
        Search, Apply & <br />
        <span className="text-[#6A38C2]">Land your Dream Job</span>
      </h1>
      <div className="w-[70%] mx-auto align-center mt-2 text-center">
        <p className="text-black leading-relaxed p-2">
          Jobsmart is a platform that helps job seekers find and land their
          dream jobs while enabling recruiters to hire the right talent based on
          skills, experience, and more. Bridging the gap between opportunity and
          ambition!
        </p>
        {/* Search bar area */}
        <div className="flex flex-wrap items-center justify-center md:w-[70%] sm:w-full shadow-lg rounded-full border border-gray-200 mx-auto">
          <div className="flex items-center ml-3 w-full sm:w-auto p-2">
            <FaSearch className="text-gray-500 w-6 h-6" />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="w-full px-2 outline-none italic"
            />
          </div>
          <div className="flex items-center w-full sm:w-auto ml-2 p-2">
            <FaMapMarkerAlt className="text-gray-500 w-6 h-6" />
            <input
              type="text"
              placeholder="City, Country or 'remote'"
              className="w-full px-2 outline-none italic"
            />
          </div>
          <div className="flex items-center w-full sm:w-auto ml-2 p-2">
            <FaBriefcase className="text-gray-500 w-6 h-6" />
            <input
              type="text"
              placeholder="Experience level"
              className="w-full px-2 outline-none italic"
            />
          </div>
          <Button className="rounded-r-full text-white py-2 px-5 hover:bg-blue-700 w-full lg:w-auto">
            <Search className="w-6 h-6" />
          </Button>
          {/* end of the search bar */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
