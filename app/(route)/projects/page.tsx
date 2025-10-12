import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="lg:px-36 md:px-6 px-4 mt-16">
      <h1 className="sm:text-7xl text-6xl text-center font-bold">Projects</h1>
      {/* <input
        type="text"
        className="mt-6 pl-5 w-full rounded-full md:py-3 py-2 bg-black border transition-all duration-500 border-[#4f4f4f80] placeholder:text-[#bcbcbc80] md:placeholder:text-[18px] placeholder:text-[15px] focus:bg-zinc-900"
        placeholder="Search..."
      /> */}
      <div className="flex my-14 gap-5 md:flex-nowrap flex-wrap md:justify-normal justify-center">
        <Link href="projects/lms" legacyBehavior>
          <ProjectCard
            projectImg="/next-js.svg"
            projectName="LMS"
            // projectLink="https://github.com/UsmanDev09/LMS"
            projectStack="Web Application"
            description="Developed LMS Application for two different categrories, Student and Instructor. 
            Student's side, user can can buy, search, browse, watch vidoes. On Instructor side, the user
            can create, upload, modify and delete courses, chapters and videos"
            projectDate="March 2024"
            skills={["typescript.svg", "react.svg", "next.svg"]}
          />
        </Link>
        <Link href="projects/shopify" legacyBehavior>
          <ProjectCard
            projectImg="/shopify.svg"
            projectName="Gadgenie"
            // projectLink="https://gadgenie-online.myshopify.com/"
            projectStack="Shopify Website Application"
            description={`An online store that offers a wide range of gadgets and accessories
          that solves everyday problems and in minimum of time too. Password: abcd`}
            projectDate="April 2025"
            skills={["tailwind-css-2.svg", "html5.svg", "shopify.svg"]}
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
