import { ImageOff, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const Eziline = () => {
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
        <h1 className="text-7xl font-bold">Eziline Software House</h1>
        <h4 className=" text-zinc-400">Software Developemnt Company</h4>
        <div className="flex flex-row w-2/3 h-[1px] bg-zinc-700"></div>
        <div className="flex gap-2">
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
            <Image
              src="/html5.svg"
              width="18"
              height="18"
              alt=""
              className="mr-2"
            />
            HTML
          </p>
          <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
            <Image
              src="/css3.svg"
              width="18"
              height="18"
              alt=""
              className="mr-2"
            />
            CSS
          </p>
        </div>
      </div>
      <div className=" text-zinc-300 py-6 px-2 space-x-2 border-y-[1px] border-zinc-800 leading-8">
        <h4>Developed Multiple Websites from scratch</h4>
      </div>
    </div>
  );
};

export default Eziline;
