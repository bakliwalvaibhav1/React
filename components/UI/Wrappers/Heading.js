import { motion } from "framer-motion";

const Heading = ({ className = "", children }) => {
  return (
    <div
      className={`z-20 font-headingFont3 flex pb-16 pt-8 text-2xl md:text-5xl ${className}`}
    >
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="pl-4 border-teal-400 border-t-[0.5px] pt-4"
      >
        {children}
      </motion.h2>
    </div>
  );
};

export default Heading;
