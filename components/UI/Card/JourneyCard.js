import { motion, useAnimationControls } from "framer-motion";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";

const hoverVariant = {
  open: {
    opacity: 1,
    y: -200,
    transition: { duration: 0.4 },
  },
  closed: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const JourneyCard = ({ className, imageSrc, imageAlt, techStack, content, projectName, date, ...rest }) => {
  const { hoverText1, hoverText2, liveLink, codeLink } = rest;

  const controls = useAnimationControls();
  const handleHoverState = () => {
    controls.start("open");
  };
  const handleUnhoverState = () => {
    controls.start("closed");
  };

  return (
    <TimelineItem>
      <TimelineOppositeContent>{date}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <motion.div
          // onHoverStart={handleHoverState}
          // onHoverEnd={handleUnhoverState}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`p-4 space-y-4 h-auto mx-4 md:w-[400px] lg:w-[500px] flex flex-col bg-neutral-900 bg-opacity-85 rounded-xl border-[0.5px] border-neutral-600 hover:border-teal-800 group ${className} text-left`}
        >
          <div className="relative p-1 overflow-hidden">
            <img src={imageSrc} alt={imageAlt} className="w-screen mx-auto h-[200px] rounded-t-lg object-cover bg-white" />
            <motion.div variants={hoverVariant} animate={controls} className="absolute w-full h-[200px] bg-black rounded-t-lg flex flex-col items-start pl-10 justify-center text-5xl">
              <span>{hoverText1}</span>
              <span>{hoverText2}</span>
            </motion.div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {techStack.map((item, index) => (
              <span key={index} className="px-4 py-1 border-neutral-700 text-neutral-400 border-[0.5px] rounded-full group-hover:text-white group-hover:border-teal-800">
                {item}
              </span>
            ))}
          </div>

          <div className="px-1 space-y-2 flex flex-col flex-grow justify-between overflow-hidden">
            <h2 className="text-3xl">{projectName}</h2>
            <ul className="flex-grow pt-4 pl-5 list-disc space-y-4">
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {/* <div className="flex justify-between gap-2">
          {liveLink && <WorkCardButton title="Check Live" href={liveLink} />}
          {codeLink && <WorkCardButton title="See Code" href={codeLink} />}
        </div> */}
          </div>
        </motion.div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default JourneyCard;
