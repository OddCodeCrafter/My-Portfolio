import ProjectCard from "@/components/ProjectCard";
import React from "react";

const Projects = () => {
  return (
    <div className="lg:px-36 md:px-6 px-4 mt-16">
      <h1 className="text-7xl text-center font-bold">Projects</h1>
      {/* <input
        type="text"
        className="mt-6 pl-5 w-full rounded-full md:py-3 py-2 bg-black border transition-all duration-500 border-[#4f4f4f80] placeholder:text-[#bcbcbc80] md:placeholder:text-[18px] placeholder:text-[15px] focus:bg-zinc-900"
        placeholder="Search..."
      /> */}
      <div className="flex my-14 gap-5 md:flex-nowrap flex-wrap md:justify-normal justify-center">
        <ProjectCard
          projectImg="/next-js.svg"
          projectName="LMS"
          projectLink="https://github.com/UsmanDev09/LMS"
          projectStack="Web Application"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non
        dolores voluptatibus vitae praesentium aperiam, iure laboriosam
        repellendus sunt explicabo pariatur totam enim, nihil animi quisquam.
        Sit vero quod laborum!"
          projectDate="March 2024"
          skills={["typescript.svg", "react.svg", "next.svg"]}
        />
      </div>
    </div>
  );
};

export default Projects;
