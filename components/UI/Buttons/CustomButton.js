import { LinkArrow } from "@/public/SVG/svg";
import { motion, useAnimationControls } from "framer-motion";

const hoverVariant = {
  open: {
    opacity: 1,
    x: 165,
    transition: { duration: 0.4 },
  },
  closed: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const CustomButton = ({
  href,
  title = "Button",
  SVG,
  onClick,
  disabled = false,
  className,
}) => {
  const controls = useAnimationControls();

  const handleHoverState = () => {
    controls.start("open");
  };
  const handleUnhoverState = () => {
    controls.start("closed");
  };
  const handleButtonClick = () => {
    window.open(href, "_blank", "noopener noreferrer");
  };
  return (
    <motion.button
      onClick={onClick || handleButtonClick}
      onHoverStart={handleHoverState}
      onHoverEnd={handleUnhoverState}
      disabled={disabled}
      className={`relative px-3 md:px-4 py-1 border-[0.5px] border-neutral-600 flex items-center justify-center gap-2 overflow-hidden cursor-pointer hover:underline underline-offset-2 text-sm md:text-base disabled:cursor-progress disabled:opacity-50 disabled:no-underline ${className}`}
    >
      {title}

      {!disabled && SVG ? (
        <SVG className="h-4 w-4 md:h-5 md:w-5" />
      ) : (
        !disabled && <LinkArrow className="h-4 w-4 md:h-5 md:w-5" />
      )}

      {!disabled && (
        <motion.span
          variants={hoverVariant}
          animate={controls}
          className="bg-white absolute -left-[165px] top-0 w-[120%] h-full mix-blend-difference"
        />
      )}
    </motion.button>
  );
};

export default CustomButton;
