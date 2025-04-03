import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobs = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border border-gray-200 rounded-md shadow-md my-2 mb-4 w-full">
        <Table className="w-full text-center my-2">
          <TableCaption className="italic font-semibold text-black">
            List of Applied Jobs
          </TableCaption>
          <TableHeader>
            <TableRow className={"text-lg font-semibold italic"}>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Job Role</TableHead>
              <TableHead className="text-center">Company</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <TableRow key={index} className="text-center">
                <TableCell>01-01-2023</TableCell>
                <TableCell>Software Engineer</TableCell>
                <TableCell>Zepto</TableCell>
                <TableCell>
                  <Badge>Selected</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AppliedJobs;
