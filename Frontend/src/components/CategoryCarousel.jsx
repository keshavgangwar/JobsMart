import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Web Designer",
  "Graphic Designer",
  "Product Designer",
  "UI/UX Designer",
  "Data Scientist",
  "Cyber Security",
  "Machine Learning",
  "Cloud Computing",
  "Blockchain",
  "Artificial Intelligence",
  "Mobile Development",
  "Game Development",
  "Network Security",
  "DevOps",
];

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-5">
        <CarouselContent>
          {category.map((item, index) => (
            <CarouselItem className="md:basis-1/3 lg-basis-1/4">
              <Button variant="outline" className="rounded-full">
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
