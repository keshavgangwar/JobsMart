import React from "react";
import LatestJobCard from "./LatestJobCard";
import { useSelector } from "react-redux";

const LatestJobs = () => {
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
    <div className="max-w-7xl mx-auto my-5">
      <h1 className="text-xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings..
      </h1>
      <div className="grid grid-cols-3 gap-4 my-2">
        {!uniqueJobs || uniqueJobs.length <= 0 ? (
          <span>No jobs found</span>
        ) : (
          uniqueJobs.map((job) => <LatestJobCard key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
