import EducationCard from "@/components/EducationCard";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Education = () => {
  return (
    <div className="lg:px-36 md:px-6 px-4 mt-16">
      <h1 className="text-7xl text-center font-bold">Education</h1>
      {/* <input
        type="text"
        className="mt-6 pl-5 w-full rounded-full md:py-3 py-2 bg-black border transition-all duration-500 border-[#4f4f4f80] placeholder:text-[#bcbcbc80] md:placeholder:text-[18px] placeholder:text-[15px] focus:bg-zinc-900"
        placeholder="Search..."
      /> */}

      {/* Education Timeline Start */}
      <div className="my-14 mx-auto w-full grid md:grid-cols-11 grid-cols-6 px-2">
        {/* Timeline  */}
        <div className="md:col-span-5 col-span-full md:mx-0 mx-auto w-full h-full ">
          <EducationCard
            instituteImg="/tuf.png"
            degreeName="BS Computer Science"
            instituteName="The University of Faisalabad"
            courses={[
              "C++",
              "HTML",
              "WordPress",
              "CSS",
              "MySql",
              "MS Word",
              "Python",
            ]}
            location="Faisalabad"
            duration="4 Years"
          />
        </div>
        <div className="relative col-span-1 w-full h-full md:flex hidden justify-center items-center ">
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

export default Education;
