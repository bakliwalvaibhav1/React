import ImageCard from "./ImageCard";
import CardDetails from "./CardDetails";
import { EducationData } from "@/utils/EducationData";

const EducationCard = ({ className }) => {
  return (
    <div
      className={`mx-auto grid grid-cols-1 sm:w-[350px] md:gap-4 md:w-auto md:mx-10 md:grid-cols-2 md:grid-flow-row ${className}`}
    >
      <div className="px-4 h-full flex flex-col md:px-0 md:justify-around md:justify-self-end">
        {EducationData.map(({ imageURL, className, ...rest }, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-neutral-950 border-[0.5px] border-teal-800 md:border-none md:w-full md:h-full mb-10 md:p-0 md:m-0 md:sticky md:top-[25dvh]"
          >
            <ImageCard url={imageURL} className={className} />
            <CardDetails {...rest} className="mb-10 md:hidden" />
          </div>
        ))}
      </div>
      <div className="hidden md:h-full md:flex md:flex-col md:justify-between md:space-y-4 bg-opacity-50">
        {EducationData.map(({ imageURL, className, ...rest }, index) => (
          <CardDetails key={index} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
