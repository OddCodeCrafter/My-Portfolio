import { ImageOff, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const tuf = () => {
  return (
    <div className="lg:px-36 md:px-8 sm:px-4 px-4">
      <div
        className="h-[380px] bg-right flex flex-col items-center justify-center gap-3"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/tuf.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-7xl font-bold">The University of Faisalabad</h1>
        <h4 className=" text-zinc-400">BS Computer Science</h4>
        <div className="flex flex-row w-2/3 h-[1px] bg-zinc-700"></div>
        <div className="flex gap-2 flex-wrap">
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-300 border-zinc-700">
            HTML
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-300 border-zinc-700">
            CSS
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-300 border-zinc-700">
            C++
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-300 border-zinc-700">
            Wordpress
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-300 border-zinc-700">
            MySql
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-300 border-zinc-700">
            MS Word
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-300 border-zinc-700">
            Python
          </p>
        </div>
      </div>
      <div className=" text-zinc-300 py-6 px-2 space-x-2 border-y-[1px] border-zinc-800 leading-8">
        <h4>
          <i>
            <strong>Courses:</strong>
          </i>{" "}
          Web Design and Development, Wordpress Development, Database Management
          System, Human Computer Interaction, Graphic designing, Object Oriented
          Programming, Data Structure and Algorithm
        </h4>
      </div>
      {/* <div className=" text-zinc-300 py-6 px-2 space-x-2 border-y-[1px] border-zinc-800 leading-8">
        <h4>Developed Multiple Websites from scratch</h4>
      </div> */}
    </div>
  );
};

export default tuf;
