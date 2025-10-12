import { ImageOff, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const KS = () => {
  return (
    <div className="lg:px-36 md:px-8 sm:px-4 px-4">
      <div
        className="h-[350px] bg-right flex flex-col items-center justify-center gap-3"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/knowledge-streams-logo.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "350px",
        }}
      >
        <h1 className="text-7xl font-bold">Knowledge Streams</h1>
        <h4 className=" text-zinc-400">IT Training Institute</h4>
        <div className="flex flex-row w-2/3 h-[1px] bg-zinc-700"></div>
        <div className="flex gap-2">
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
            <Image
              src="/node.svg"
              width="18"
              height="18"
              alt=""
              className="mr-2"
            />
            Node
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
            <Image
              src="/javascript.svg"
              width="18"
              height="18"
              alt=""
              className="mr-2"
            />
            JavaScript
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
            <Image
              src="/react.svg"
              width="18"
              height="18"
              alt=""
              className="mr-2"
            />
            React
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
            <Image
              src="/postgresql.svg"
              width="18"
              height="18"
              alt=""
              className="mr-2"
            />
            Postgres
          </p>
        </div>
      </div>
      <div className=" text-zinc-300 py-6 px-2 space-x-2 border-y-[1px] border-zinc-800 leading-8">
        <h4>
          Developed Multiple Web Application in Full Stack (Front-End and
          Back-End). Learned MERN (MongoDB, Express, React and Node) Stack to
          get Full Stack Knowledge, it&apos;s working and skills. Also Atteded
          Soft Skill seassions to get knowledge of software companies working
          environment I worked on a small e-commerce website as part of a team
          project during my studies. This experience taught me about
          collaboration, version control, and the challenges of integrating
          payment gateways.
        </h4>
      </div>
    </div>
  );
};

export default KS;
