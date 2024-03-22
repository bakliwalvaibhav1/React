import React from "react";
import WorkCard from "@/components/UI/Card/WorkCard";
import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";
import { ProjectData } from "@/utils/ProjectData";

const Work = () => {
  return (
    <SectionWrapper id="Work" className="flex flex-col">
      <Heading>
        Dive into the <span className="gradient-text-teal-sky">&#60; / projects &#62;</span>
      </Heading>
      {/* <div className="mx-auto grid grid-cols-1 gap-14 md:gap-0 lg:gap-x-12 xl:gap-x-20 md:grid-cols-2 md:grid-flow-row "> */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-flow-row ">
        {ProjectData.map(({ className, ...rest }, index) => (
          <WorkCard key={index} {...rest} className={`${index % 2 === 0 ? "md:mb-[80px]" : "md:mt-[80px]"} md:mx-[12px] mt-1`} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default React.memo(Work);
