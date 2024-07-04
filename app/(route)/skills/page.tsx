import SkillCard from "@/components/SkillCard";

const Skills = () => {
  return (
    <div className="lg:px-36 md:px-6 px-4 mt-16">
      <h1 className="text-7xl text-center font-bold">Skills</h1>
      {/* <input
        type="text"
        className="mt-6 pl-5 w-full rounded-full md:py-3 py-2 bg-black border transition-all duration-500 border-[#4f4f4f80] placeholder:text-[#bcbcbc80] placeholder:text-[18px] focus:bg-zinc-900"
        placeholder="Search..."
      /> */}
      <div className="flex flex-col gap-y-16 my-12">
        <div>
          <div className="flex items-center">
            <div className="bg-[#343434] h-[1px] w-[20px] "></div>
            <h4 className="flex text-base text-[#4e4e4e] mx-2 ">
              Programming Languages
            </h4>
            <div className="flex-1 bg-[#343434] h-[1px]"></div>
          </div>
          <div className="flex gap-5 mt-4 flex-wrap">
            <SkillCard name="JavaScript" imgUrl="javascript.svg" />
            <SkillCard name="TypeScript" imgUrl="typescript.svg" />
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="bg-[#343434] h-[1px] w-[20px] "></div>
            <h4 className="flex text-base text-[#4e4e4e] mx-2 ">
              Markup & Style
            </h4>
            <div className="flex-1 bg-[#343434] h-[1px]"></div>
          </div>
          <div className="flex gap-5 mt-4 md:flex-nowrap flex-wrap">
            <SkillCard name="HTML" imgUrl="html5.svg" />
            <SkillCard name="CSS" imgUrl="css3.svg" />
            <SkillCard name="Tailwind" imgUrl="tailwind-css-2.svg" />
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="bg-[#343434] h-[1px] w-[20px] "></div>
            <h4 className="flex text-base text-[#4e4e4e] mx-2 ">Liabraries</h4>
            <div className="flex-1 bg-[#343434] h-[1px]"></div>
          </div>
          <div className="flex gap-5 mt-4 md:flex-nowrap flex-wrap">
            <SkillCard name="React" imgUrl="react.svg" />
            <SkillCard name="Next Js" imgUrl="Nextjs.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
