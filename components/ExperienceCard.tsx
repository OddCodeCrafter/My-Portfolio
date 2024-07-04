import Image from "next/image";

interface ExperienceProps {
  companyName: string;
  companyImg: string;
  empTypes: string[];
  duration: string;
  description: string;
  stacks: string[];
}
const ExperienceCard = ({
  companyName,
  companyImg,
  empTypes,
  stacks,
  duration,
  description,
}: ExperienceProps) => {
  return (
    <div className="flex cursor-pointer p-6 w-full gap-x-5 border border-[#4f4f4f80] hover:border-zinc-500 rounded-2xl my-6 transition-all duration-300 hover:scale-105">
      <Image
        loading="eager"
        src={companyImg}
        alt=""
        width={53}
        height={30}
        className="rounded-xl self-start"
      />
      <div>
        <h3 className="text-xl font-semibold">{companyName}</h3>
        <div className="flex gap-x-3 flex-wrap my-2">
          {empTypes.map((emp, index) => {
            return (
              <h5
                key={index}
                className="transition-all font-light my-1 inline-block border border-[#63636380] rounded-full text-zinc-300 py-1 px-3 text-xs hover:bg-zinc-900 cursor-pointer hover:scale-105"
              >
                {emp}
              </h5>
            );
          })}
        </div>
        <h5 className="my-2 font-light text-zinc-400">{duration}</h5>
        <h6 className="font-light">{description}</h6>
        <div className="flex gap-x-2 my-5">
          {stacks.map((stack, index) => {
            return (
              <Image
                className="transition-all duration-300 hover:scale-105 hover:bg-zinc-900 border p-2 rounded-lg border-zinc-600 opacity-80 hover:opacity-100"
                width="36"
                src={stack}
                height={100}
                key={index}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
