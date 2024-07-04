import Image from "next/image";

interface ExperienceProps {
  degreeName: string;
  instituteName: string;
  instituteImg: string;
  location: string;
  duration: string;
  courses: string[];
}
const EducationCard = ({
  degreeName,
  instituteName,
  instituteImg,
  courses,
  location,
  duration,
}: ExperienceProps) => {
  return (
    <div className=" cursor-pointer p-6 w-full gap-x-5 border border-[#4f4f4f80] hover:border-zinc-500 rounded-2xl my-6 transition-all duration-300 hover:scale-105">
      <Image
        src={instituteImg}
        alt=""
        width={40}
        height={100}
        className="rounded-xl self-start bg-white"
      />
      <div className="mt-5">
        <h3 className="text-xl font-semibold">{degreeName}</h3>
        <h3 className="text-lg font-light">{instituteName}</h3>
        <h5 className="my-2 font-light text-zinc-400">
          {location} - {duration}
        </h5>
        <div className="flex gap-x-2 flex-wrap my-2">
          {courses.map((course, index) => {
            return (
              <h5
                key={index}
                className="transition-all font-light my-1 inline-block border border-[#63636380] rounded-full text-zinc-300 py-1 px-4 text-sm hover:bg-zinc-900 cursor-pointer hover:scale-105"
              >
                {course}
              </h5>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
