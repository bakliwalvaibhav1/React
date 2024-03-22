import LayoutCard from "./LayoutCard";
import { SkillsData } from "@/utils/SkillsData";

const SkillLayout = () => {
  return (
    <div className="flex flex-col">
      {SkillsData.map((item, index) => (
        <LayoutCard key={index} {...item} />
      ))}
    </div>
  );
};

export default SkillLayout;
