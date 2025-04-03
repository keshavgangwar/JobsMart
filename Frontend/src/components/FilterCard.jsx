import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi NCR",
      "Mumbai",
      "Pune",
      "Chennai",
      "Kolkata",
      "Bangalore",
      "Hyderabad",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Web Designer",
      "Graphic Designer",
      "Product Designer",
      "UI/UX Designer",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0-40k",
      "10 - 15 LPA",
      "15 - 20 LPA",
      "20 - 25 LPA",
      "25 - 30 LPA",
      "30 - 35 LPA",
      "35 - 40 LPA",
    ],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-2 rounded-md  ">
      <h1 className="font-bold text-lg italic">Apply Filters</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((item, index) => (
          <div key={index}>
            <h1 className="font-bold text-md italic">{item.filterType}</h1>
            {item.array.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={option} />
                <Label>{option}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
