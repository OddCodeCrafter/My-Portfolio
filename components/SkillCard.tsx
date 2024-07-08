interface SkillCardProps {
  name: string;
  imgUrl: string;
}

const SkillCard = ({ name, imgUrl }: SkillCardProps) => {
  return (
    <div
      className=" opacity-90 flex justify-between bg-no-repeat bg-right items-center border rounded-2xl transition-all duration-300 border-[#4f4f4f80] hover:border-[#7d7d7d] p-6 md:w-[400px] w-full hover:scale-105 cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1.1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${imgUrl})`,
        backgroundSize: "180px",
      }}
    >
      <h5 className="text-lg text-[#d1d1d1]">{name}</h5>
    </div>
  );
};

export default SkillCard;
