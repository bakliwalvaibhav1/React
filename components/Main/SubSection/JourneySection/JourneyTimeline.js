import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import JourneyCard from "@/components/UI/Card/JourneyCard";
import { JourneyData } from "@/utils/JourneyData";
// import FastfoodIcon from "@mui/icons-material/Fastfood";

export default function JourneyTimeline() {
  return (
    // <Timeline position="alternate">
    <Timeline>
      {JourneyData.map(({ className, ...rest }, index) => (
        <JourneyCard key={index} {...rest} />
      ))}
    </Timeline>
  );
}
