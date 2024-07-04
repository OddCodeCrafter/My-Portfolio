import { Separator } from "@radix-ui/react-separator";
import {
  Box,
  Boxes,
  Briefcase,
  CodeXml,
  GraduationCap,
  LucideClipboardList,
  Moon,
  Search,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between lg:px-36 md:px-6 px-4 text-gray-200 border-b-[1px] border-b-[#1e1e1e]">
      <Link
        className="flex font-bold text-xl items-center px-3 hover:bg-zinc-800"
        href="/"
      >
        <CodeXml className="mr-2" />
        Muhammad Sualeh
      </Link>
      <div className="flex gap-x-10 text-sm">
        <Link
          className="flex items-center px-4 py-4 hover:bg-zinc-800"
          href="/projects"
        >
          <Box className="w-5 h-5" />
          <p className="ml-2 hidden lg:block">Projects</p>
        </Link>
        <Link
          className="flex items-center px-4 py-4 hover:bg-zinc-800"
          href="/skills"
        >
          <Boxes className="w-5 h-5" />
          <p className="ml-2 hidden lg:block">Skills</p>
        </Link>
        <Link
          className="flex items-center px-4 py-4 hover:bg-zinc-800"
          href="/experience"
        >
          <Briefcase className="w-5 h-5" />
          <p className="ml-2 hidden lg:block">Experience</p>
        </Link>
        <Link
          className="flex items-center px-4 py-4 hover:bg-zinc-800"
          href="/education"
        >
          <GraduationCap className="w-5 h-5" />
          <p className="ml-2 hidden lg:block">Education</p>
        </Link>
        {/* <Link
          className="flex items-center px-4 py-4 hover:bg-zinc-800"
          href="/resume"
        >
          <LucideClipboardList className="w-5 h-5" />
          <p className="ml-2 hidden lg:block">Resume</p>
        </Link> */}
      </div>
      {/* <div className="flex items-center cursor-pointer">
        <Search className="w-12 h-12 px-1 py-4 hover:bg-zinc-800" />
        <Moon className="w-12 h-12 px-1 py-4 hover:bg-zinc-800" />
      </div> */}
    </div>
  );
};

export default Navbar;
