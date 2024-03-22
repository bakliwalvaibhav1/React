import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";
import React from "react";
import JourneyTimeline from "./JourneySection/JourneyTimeline";

function Journey() {
  return (
    <SectionWrapper id="Journey">
      <Heading>
        Schooling and <span className="gradient-text-teal-sky">&#60; / Beyond &#62;</span>
      </Heading>
      <JourneyTimeline />
      {/* <EducationCard className="xl:mx-[150px]" /> */}
    </SectionWrapper>
  );
}

export default React.memo(Journey);
