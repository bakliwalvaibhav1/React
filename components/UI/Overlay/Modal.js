import { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const Modal = ({ backdrop, modal, reset, children, variants }) => {
  useEffect(() => {
    const rootElement = document.body;
    rootElement?.classList.add("no-scroll");

    return () => {
      //Cleanup function will run when component unmount.
      rootElement?.classList.remove("no-scroll");
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <Backdrop reset={reset} backdrop={backdrop} />

      {/* We need to specify the position of modal first in the component where we are using this modal*/}
      <motion.div
        className={`fixed shadow-xl z-30 ${modal}`}
        variants={variants}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Modal;
