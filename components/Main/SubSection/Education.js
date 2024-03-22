import React from "react";
import EducationCard from "@/components/UI/Card/Education/EducationCard";
import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";

const Education = () => {
  return (
    <SectionWrapper id="Education">
      <Heading>
        Schooling and{" "}
        <span className="gradient-text-teal-sky">&#60; / Beyond &#62;</span>
      </Heading>
      <EducationCard className="xl:mx-[150px]" />
    </SectionWrapper>
  );
};

export default React.memo(Education);
