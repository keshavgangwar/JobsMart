import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { allJobs } = useSelector((store) => store.Job);

  // Get unique jobs (no duplicates)
  const uniqueJobs = allJobs?.reduce((acc, job) => {
    // Check if we already have this exact job
    const jobExists = acc.some((item) => item._id === job._id);

    if (!jobExists) {
      // If we don't have this job yet, add it
      acc.push(job);
    }

    return acc;
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5 ml-6">
          <div className="w-20%">
            <FilterCard />
          </div>
          {!uniqueJobs || uniqueJobs.length <= 0 ? (
            <span>No jobs found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5 mx-5">
              <div className="grid grid-cols-3 gap-4">
                {uniqueJobs.map((job) => (
                  <div key={job?._id}>
                    <Job job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
