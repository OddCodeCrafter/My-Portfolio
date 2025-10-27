import { ImageOff, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const LMS = () => {
  const imgs: string[] = [];
  return (
    <div className="lg:px-36 md:px-8 sm:px-4 px-4">
      <div
        className="h-[350px] bg-right flex flex-col items-center justify-center gap-3"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/wordpress.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <h1 className="text-7xl font-bold">Datalogy</h1>
        <h4 className=" text-zinc-400">Wordpress Website Application</h4>
        <div className="flex flex-row w-2/3 h-[1px] bg-zinc-700"></div>
        {/* <p className="text-sm px-3 py-1 border-[1px] items-center rounded-full text-zinc-400 border-zinc-800">
          <a
            href="https://github.com/UsmanDev09/LMS"
            className="flex items-center"
          >
            <Link className="mr-2 w-3 h-3" />
            Github
          </a>
        </p> */}
        <p className="text-sm px-3 py-1 border-[1px] items-center rounded-full text-zinc-400 border-zinc-700 transition duration-200 hover:scale-110">
          <a href="https://dataology.com.au" className="flex items-center">
            <Link className="mr-2 w-3 h-3" />
            Website
          </a>
        </p>
        <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
          <Image
            src="/wordpress.png"
            width="18"
            height="18"
            alt=""
            className="mr-2"
          />
          Wordpress
        </p>
        {/* <p className="text-sm px-3 py-1 flex items-center border-[1px] rounded-full text-zinc-400 border-zinc-700">
          <Image
            src="/next.svg"
            width="18"
            height="18"
            alt=""
            className="mr-2"
          />
          Next.js
        </p> */}
      </div>
      <div className=" text-zinc-300 py-6 px-2 space-x-2 border-y-[1px] border-zinc-800 leading-8">
        <h4>
          It is a wordpress website and An Australian based company, developed
          to deliver solutions in different department, tailored for thier
          clients need. It has been desingned with elementor page, component,
          element, field and form builder etc.
        </h4>
      </div>
      {imgs.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-10 gap-2 text-zinc-700">
          <ImageOff className="w-11 h-11" />
          No Screenshot
        </div>
      ) : (
        <div className="my-5 gap-5">
          <h1 className="text-5xl font-bold text-center my-10">ScreenShots</h1>

          {imgs.map((img) => {
            return (
              <Image
                className="my-5 rounded-xl"
                key={img}
                src={img}
                alt={img}
                width="1600"
                height="100"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LMS;
