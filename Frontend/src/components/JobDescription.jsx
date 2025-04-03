import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl italic ">Software Developer</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-[#6A38C2] font-bold" variant={"ghost"}>
              10 Positions
            </Badge>
            <Badge className="font-bold" variant={"ghost"}>
              Full-time
            </Badge>
            <Badge className="text-[#fbbf24] font-bold" variant={"ghost"}>
              ₹20,000 - ₹25,000 per month
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied ? "cursor-not-allowed hover:bg-gray-600" : "bg-[#6A38C2]"
          }`}
        >
          {isApplied ? "Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="font-bold text-md border-b-2 border-gray-500 font-medium mt-4 pb-1">
        Job Description
      </h1>
      <div>
        <h1 className="font-bold">
          Role: <span className="italic font-normal">Software Developer</span>
        </h1>
        <h1 className="font-bold">
          Location:{" "}
          <span className="italic font-normal">Jalandhar, Punjab</span>
        </h1>
        <h1 className="font-bold">Key Responsibilities:</h1>
        <ul className="list-disc list-inside italic font-normal ml-5">
          <li>
            Develop and maintain web applications using React.js, Node.js, and
            MongoDB
          </li>
          <li>
            Design and build RESTful APIs & integrate third-party services
          </li>
          <li>Optimize applications for maximum speed and scalability</li>
          <li>Collaborate with designers, developers, and project managers</li>
          <li>Debug, troubleshoot, and enhance existing applications</li>
          <li>
            Stay up to date with the latest technologies and industry trends
          </li>
        </ul>
        <h1 className="font-bold mt-4">Skills & Qualifications:</h1>
        <ul className="list-disc list-inside italic font-normal ml-5">
          <li>
            Strong knowledge of React.js, Node.js, MongoDB, and Express.js
          </li>
          <li>Experience with Redux, Hooks, Context API (for React)</li>
          <li>Proficiency in JavaScript (ES6+), HTML, CSS, and RESTful APIs</li>
          <li>Understanding of database design & optimization (MongoDB)</li>
          <li>Familiarity with Git, CI/CD, and deployment processes</li>
          <li>
            Problem-solving skills and a passion for clean, efficient code
          </li>
        </ul>
        <h1 className="font-bold mt-4">
          Experience:{" "}
          <span className="italic font-normal">
            React - 2 years, Node.js - 2 years, Web Development - 2 years
          </span>
        </h1>
        <h1 className="font-bold">
          Education:{" "}
          <span className="italic font-normal">Bachelor's (Preferred)</span>
        </h1>
        <h1 className="font-bold">
          Schedule:{" "}
          <span className="italic font-normal">Monday to Friday, UK Shift</span>
        </h1>
        <h1 className="font-bold">
          Relocation:{" "}
          <span className="italic font-normal">
            Jalandhar, Punjab (Required before starting)
          </span>
        </h1>
        <h1 className="font-bold">
          Posted Date: <span className="italic font-normal">15-03-2025</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
