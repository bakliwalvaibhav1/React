import { TerminalIcon } from "@/public/SVG/svg";
import { motion } from "framer-motion";

const LayoutCard = ({ SVG, title, about, heading, list }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-neutral-950 w-[280px] md:w-[350px] lg:w-[400px] m-4 p-4 border-x-[0.5px] border-teal-400 flex flex-col items-center justify-start text-center space-y-2"
    >
      {SVG && <SVG className="fill-teal-400" />}
      <>
        <h3 className="text-lg pt-2 font-headingFont font-bold ">{title}</h3>
        <p>{about}</p>
      </>

      <h4 className="text-teal-400 pt-6">{heading}</h4>
      <ul className="space-y-1">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default LayoutCard;
