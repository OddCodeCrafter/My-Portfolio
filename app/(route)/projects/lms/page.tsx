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
            "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/next.svg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-7xl font-bold">LMS</h1>
        <h4 className=" text-zinc-400">Web Application</h4>
        <div className="flex flex-row w-2/3 h-[1px] bg-zinc-700"></div>
        <p className="text-sm px-3 py-1 border-[1px] items-center rounded-full text-zinc-400 border-zinc-800">
          <a
            href="https://github.com/UsmanDev09/LMS"
            className="flex items-center"
          >
            <Link className="mr-2 w-3 h-3" />
            Github
          </a>
        </p>
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
      </div>
      <div className=" text-zinc-300 py-6 px-2 space-x-2 border-y-[1px] border-zinc-800 leading-8">
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non
          dolores voluptatibus vitae praesentium aperiam, iure laboriosam
          repellendus sunt explicabo pariatur totam enim, nihil animi quisquam.
          Sit vero quod laborum!
        </h4>
      </div>
      {imgs.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-10 gap-2 text-zinc-700">
          <ImageOff className="w-11 h-11" />
          No Screenshot
        </div>
      ) : (
        <div className="my-5 gap-5">
          {imgs.map((img) => {
            return (
              <>
                <h1 className="text-5xl font-bold text-center">ScreenShots</h1>
                <Image key={img} src={img} alt="" width="100" height={100} />
                {/* <h2 className=""></h2> */}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LMS;
