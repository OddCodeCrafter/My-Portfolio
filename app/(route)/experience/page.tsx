"use client";
import ExperienceCard from "@/components/ExperienceCard";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Building2, MapPin, Target } from "lucide-react";
// import Link from "next/link";

const Experience = () => {
  const iconArray = [Building2, MapPin, Target];
  return (
    <div className="lg:px-36 md:px-6 px-4 mt-16">
      <h1 className="sm:text-7xl text-6xl text-center font-bold">Experience</h1>
      {/* <input
        type="text"
        className="mt-6 pl-5 w-full rounded-full md:py-3 py-2 bg-black border transition-all duration-500 border-[#4f4f4f80] placeholder:text-[#bcbcbc80] md:placeholder:text-[18px] placeholder:text-[15px] focus:bg-zinc-900"
        placeholder="Search..."
      /> */}

      {/* Experiences */}
      <div className="my-14 mx-auto w-full grid md:grid-cols-11 grid-cols-6 px-2">
        {/* 1st Timeline  */}
        <div className="md:col-span-5 col-span-full md:mx-0 mx-auto w-full h-full ">
          <a href="experience/zigron">
            <ExperienceCard
              empTypes={[
                "Front-End Developer",
                "Lahore",
                "Full-Time",
                "Hybrid",
              ]}
              icons={iconArray}
              companyImg="no-img.svg"
              companyName="Zigron"
              stacks={["typescript.svg", "tailwind-css-2.svg", "next.svg"]}
              duration="March 2024 - January 2025"
              description="Developed Web Application for International Clients in a React's framework Next.js."
            />
          </a>
        </div>
        <div className="relative col-span-1 w-full h-full md:flex hidden justify-center items-center ">
          <div className="h-full w-[2px] bg-[#4f4f4f80]"></div>
          <FontAwesomeIcon
            icon={faDiamond}
            className="absolute w-6 h-6 py-3 text-zinc-400 rounded-full bg-black z-10 text-center"
          />
        </div>
        <div className="col-span-5 w-full h-full"></div>

        {/* 2nd Timeline */}
        <div className="col-span-5 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full md:flex hidden justify-center items-center">
          <div className="h-full w-[2px] bg-[#4f4f4f80]"></div>
          <FontAwesomeIcon
            icon={faDiamond}
            className="absolute w-6 h-6 py-3 text-zinc-400 rounded-full bg-black z-10 text-center"
          />
        </div>
        <div className="md:col-span-5 col-span-full w-full h-full">
          <a href="experience/ks">
            <ExperienceCard
              empTypes={[
                "Trainee MERN Stack Developer",
                "Lahore",
                "Full-Time",
                "On-Site",
              ]}
              icons={iconArray}
              companyImg="/knowledge-streams-logo.jpeg"
              companyName="Knowledge Streams"
              stacks={[
                "react.svg",
                "expressjs.svg",
                "node.svg",
                "postgresql.svg",
              ]}
              duration="June 2023 - September 2023"
              // description="Creating awesome tools for developers."
            />
          </a>
        </div>

        {/* 3rd Timeline  */}
        <div className="md:col-span-5 col-span-full w-full h-full">
          <a href="/experience/eziline">
            <ExperienceCard
              empTypes={[
                "Front-End Intern",
                "Rawalpindi",
                "Part-Time",
                "On-Site",
              ]}
              icons={iconArray}
              companyImg="no-img.svg"
              companyName="Eziline Software House"
              stacks={["html5.svg", "css3.svg", "javascript.svg"]}
              duration="November 2022 - December 2024"
              // description="Creating awesome tools for developers."
            />
          </a>
        </div>
        <div className="relative col-span-1 w-full h-full md:flex hidden justify-center items-center">
          <div className="h-full w-[2px] bg-[#4f4f4f80]"></div>
          <FontAwesomeIcon
            icon={faDiamond}
            className="absolute w-6 h-6 py-3 text-zinc-400 rounded-full bg-black z-10 text-center"
          />
        </div>
        <div className="col-span-5 w-full h-full"></div>
      </div>
    </div>
  );
};

export default Experience;
