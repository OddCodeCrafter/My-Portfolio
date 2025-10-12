import { ImageOff, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const Zigron = () => {
  return (
    <div className="lg:px-36 md:px-8 sm:px-4 px-4">
      <div
        className="h-[350px] bg-right flex flex-col items-center justify-center gap-3"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/no-img.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "500px",
        }}
      >
        <h1 className="text-7xl font-bold">Zigron</h1>
        <h4 className=" text-zinc-400">Software Development Company</h4>
        <div className="flex flex-row w-2/3 h-[1px] bg-zinc-800"></div>
        <div className="flex gap-2">
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
            <Image
              src="/typescript.svg"
              width="18"
              height="18"
              alt=""
              className="mr-2"
            />
            TypeScript
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
            <Image
              src="/tailwind-css-2.svg"
              width="18"
              height="18"
              alt=""
              className="mr-2"
            />
            Tailwind CSS
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
            <Image
              src="/next.svg"
              width="18"
              height="18"
              alt=""
              className="mr-2"
            />
            Next JS
          </p>
        </div>
      </div>
      <div className=" text-zinc-300 py-6 px-2 space-x-2 border-y-[1px] border-zinc-800 leading-8">
        <h4>
          Developed, modified, integrate and test Website related code and Web
          application interfaces. Conducted tests and analyzed data to monitor
          quality, security, user interface experiences and to identify areas
          for improvement. Developed and implemented procedures for ongoing Web
          site revision. Monitored and maintained Web site functionality.
          Participated in Web site architecture and design in collaboration with
          clients
        </h4>
      </div>
    </div>
  );
};

export default Zigron;
