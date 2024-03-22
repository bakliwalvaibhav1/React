import { motion } from "framer-motion";

export const ToggleButton = ({ onClick, animate, className }) => (
  <motion.button
    className={`flex flex-col gap-1 relative items-center justify-center bg-black h-12 w-12 rounded-full z-30 ${className}`}
    onClick={onClick}
    animate={animate}
  >
    <motion.span
      variants={{
        closed: {
          y: 0,
          rotate: 0,
        },
        open: {
          y: "6px",
          rotate: "-45deg",
        },
      }}
      className="bg-white w-6 h-[3px]"
    />
    <motion.span
      className="bg-white w-6 h-[3px]"
      variants={{
        closed: {
          width: "50%",
        },
        open: {
          width: 0,
        },
      }}
    />

    <motion.span
      variants={{
        closed: {
          y: 0,
          rotate: 0,
        },
        open: {
          y: "-8px",
          rotate: "45deg",
        },
      }}
      className="bg-white w-6 h-[3px]"
    />
  </motion.button>
);
