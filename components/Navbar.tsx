"use client";
import {
  Box,
  Boxes,
  Briefcase,
  CodeXml,
  GraduationCap,
  Menu,
  Moon,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const nav = document.querySelector(".nav");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // nav.classList.toggle("top-14");
  };

  return (
    <div className="md:static relative flex justify-between items-center lg:px-36 md:px-8 sm:px-4 px-2 text-gray-200 border-b-[1px] border-b-[#1e1e1e] md:py-0 py-3">
      <Link className="flex font-bold text-xl items-center px-3" href="/">
        <CodeXml className="mr-2" />
        Muhammad Sualeh
      </Link>
      <div
        className={`nav md:static absolute md:bg-none bg-black flex md:flex-row flex-col gap-5 md:right-0 right-1 md:text-sm text-base md:w-fit w-full transition-all duration-300 z-10 ${
          !isOpen ? "-top-80" : "top-14"
        } `}
      >
        <Link
          className="flex items-center md:px-4 px-6 py-4 hover:bg-zinc-800 transition-all duration-300"
          href="/projects"
        >
          <Box className="w-5 h-5" />
          <p className="md:ml-2 ml-4 md:hidden lg:block block">Projects</p>
        </Link>
        <Link
          className="flex items-center md:px-4 px-6 py-4 hover:bg-zinc-800  transition-all duration-300"
          href="/skills"
        >
          <Boxes className="w-5 h-5" />
          <p className="md:ml-2 ml-4 md:hidden lg:block block">Skills</p>
        </Link>
        <Link
          className="flex items-center md:px-4 px-6 py-4 hover:bg-zinc-800 transition-all duration-300"
          href="/experience"
        >
          <Briefcase className="w-5 h-5" />
          <p className="md:ml-2 ml-4 md:hidden lg:block block">Experience</p>
        </Link>
        <Link
          className="flex items-center md:px-4 px-6 py-4 hover:bg-zinc-800 transition-all duration-300"
          href="/education"
        >
          <GraduationCap className="w-5 h-5" />
          <p className="md:ml-2 ml-4 md:hidden lg:block block">Education</p>
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
      <div className="md:hidden block cursor-pointer">
        {!isOpen ? (
          <Menu
            className="w-7 h-7"
            onClick={() => {
              toggleMenu();
            }}
          />
        ) : (
          <X
            className="w-7 h-7"
            onClick={() => {
              toggleMenu();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
