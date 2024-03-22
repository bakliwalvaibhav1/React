import { motion } from "framer-motion";

const CustomFloatingAnimation = ({ rotation, children }) => {
  const animationVariants = {
    float: { y: -1, rotate: rotation },
  };

  return (
    <motion.div
      variants={animationVariants}
      animate="float"
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default CustomFloatingAnimation;
