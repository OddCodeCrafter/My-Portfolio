import { Link } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  projectImg: string;
  projectName: string;
  projectLink: string;
  projectStack: string;
  description?: string;
  projectDate: string;
  skills: string[];
}

const ProjectCard = ({
  projectImg,
  projectName,
  projectLink,
  projectStack,
  projectDate,
  description,
  skills,
}: ProjectProps) => {
  return (
    <div className="cursor-pointer transition-all border p-7 bg-zinc-950 hover:bg-black border-[#4f4f4f80] hover:border-[#7d7d7d] rounded-2xl  lg:w-[380px] md:w-[420px] w-[450px] duration-500 hover:shadow-lg hover:scale-105  ">
      <Image src={projectImg} alt="" width={45} height={45} className="my-3" />
      <div className="flex justify-between items-center">
        <h4 className="text-2xl font-semibold">{projectName}</h4>
        <a
          href={projectLink}
          className="transition-all duration-300 p-2 border border-zinc-500 rounded-full cursor-pointer hover:bg-zinc-900 hover:scale-110"
        >
          <Link className="w-3 h-3" />
        </a>
      </div>
      <div className="h-[1px] bg-[#63636380] flex-1 my-2"></div>
      <h5 className="text-zinc-300 italic font-light">{projectStack}</h5>
      <h5 className="text-zinc-300 my-5 overflow-y-hidden h-[125px]">
        {description}
      </h5>
      <p className="transition-all inline-block border border-[#63636380] rounded-full text-zinc-300 py-1 px-3 text-xs hover:bg-zinc-900 cursor-pointer hover:scale-105">
        {projectDate}
      </p>
      <div className="h-[1px] bg-[#63636380] flex-1 my-3"></div>
      <div className="flex gap-x-2">
        {skills.map((skill, index) => (
          <img
            src={skill}
            width="36px"
            key={index}
            className="transition-all duration-300 hover:scale-105 hover:bg-zinc-900 border p-2 rounded-lg border-zinc-600"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
