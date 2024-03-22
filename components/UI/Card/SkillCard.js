const SkillCard = ({ svg: SVG, title, className, style }) => {
  return (
    <div style={style} className={`flex flex-col items-center ${className}`}>
      <SVG className="h-[25px] w-[25px] md:h-[35px] md:w-[35px] lg:h-[55px] lg:w-[55px] xl:h-650px] xl:w-[65px] bg-opacity-20" />
    </div>
  );
};

export default SkillCard;
