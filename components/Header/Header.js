import ReactDOM from "react-dom";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";

import SideNav from "../Overlays/SideNav";
import { NavLinks } from "@/utils/NavLinks";
import { ToggleButton } from "../UI/Buttons/ToogleButton";
import { ResumeButton } from "../UI/Buttons/ResumeButton";

const Header = ({ prevScroll, latestScroll }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [hidden, setHidden] = useState(false);

  if (prevScroll > latestScroll && hidden) setHidden(false);
  else if (latestScroll > 50 && prevScroll < latestScroll && !hidden)
    setHidden(true);

  const hoverStartHandler = (index, isHovering) => {
    const liNode = scope.current.children[index];
    const originalLink = liNode.children[0];
    const tempLink = liNode.children[1];

    if (originalLink && isHovering) {
      const enterAnimation = async () => {
        animate(originalLink, { opacity: 0, y: -24 }, { duration: 0.2 });
        animate(
          tempLink,
          { y: -24 },
          { duration: 0.2, type: "spring", stiffness: 500, damping: 25 }
        );
      };
      enterAnimation();
    }

    if (!isHovering) {
      const exitAnimation = async () => {
        animate(
          originalLink,
          { opacity: 1, y: 0 },
          { duration: 0.2, type: "spring", stiffness: 500, damping: 25 }
        );
        animate(tempLink, { y: 0 }, { duration: 0.2 });
      };
      exitAnimation();
    }
  };

  return (
    <header
      className={`z-30 max-w-[1440px] mx-auto bg-gradient-to-b from-black via-black to-transparent font-primaryFont h-20 text-white p-2 fixed inset-0 md:px-3 grid grid-cols-2 items-center justify-between ${
        hidden ? "lg:grid-cols-4" : "lg:grid-cols-6"
      }`}
    >
      {!hidden && (
        <ToggleButton
          onClick={() => setNavOpen(!isNavOpen)}
          animate={isNavOpen ? "open" : "closed"}
          className="col-span-1 lg:block"
        />
      )}

      <motion.ul
        ref={scope}
        className="hidden bg-neutral-900 bg-opacity-70 px-5 max-h-10 border-[0.5px] border-slate-700 rounded-full lg:flex items-center justify-center justify-self-center mx-auto col-span-4 "
      >
        {NavLinks.map((links, index) => (
          <motion.li
            className=" h-6 my-2 px-5 flex flex-col overflow-hidden"
            key={links.id}
            onHoverStart={() => hoverStartHandler(index, true)}
            onHoverEnd={() => hoverStartHandler(index, false)}
          >
            <Link className="text-gray-400" href={links.links}>
              {links.name}
            </Link>
            <Link className="font-[590]" href={links.links}>
              {links.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {!hidden && <ResumeButton className="justify-self-end mr-2" />}

      {isNavOpen &&
        ReactDOM.createPortal(
          <AnimatePresence>
            <motion.nav initial="closed" animate="open" exit="closed">
              <SideNav onReset={() => setNavOpen(false)} />
            </motion.nav>
          </AnimatePresence>,
          document.getElementById("back-drop")
        )}
    </header>
  );
};

export default Header;
