import React, { useMemo } from "react";
import Links from "./Links";
import About from "./SubSection/About";
import Contact from "./SubSection/Contact";
import Education from "./SubSection/Education";
import Skills from "./SubSection/Skills";
import Work from "./SubSection/Work";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Journey from "./SubSection/Journey";

const Main = ({ scrollChange }) => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    scrollChange(prev, latest);
  });

  return (
    <main className="h-full bg-opacity-50 font-primaryFont text-white space-y-10">
      <About />
      <Skills />
      <Work />
      <Journey />
      {/* <Education /> */}
      <Contact />
      <Links />
    </main>
  );
};

export default React.memo(Main);
