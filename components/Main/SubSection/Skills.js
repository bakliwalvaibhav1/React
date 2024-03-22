import React, { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import SkillCard from "@/components/UI/Card/SkillCard";
import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";

import { Skills as SkillsArray } from "@/utils/Skills";
import SkillLayout from "./SkillSection/SkillLayout";

const Skills = () => {
  const [radius, setRadius] = useState(200);
  const angleIncrement = 31;
  let initialAngle = 0;

  const [rotateValue, setRotate] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1258 && latest < 2326) {
      const rotate = ((latest - 1258) / 1068) * 360;
      setRotate(rotate);
    }
  });

  useEffect(() => {
    const updateRadius = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 320) {
        setRadius(160);
      } else if (screenWidth < 425) {
        setRadius(250);
      } else if (screenWidth < 768) {
        setRadius(300);
      } else if (screenWidth <= 1024) {
        setRadius(350);
      } else {
        setRadius(500);
      }
    };
    updateRadius();

    // Attach the event listener to update the radius on window resize
    window.addEventListener("resize", updateRadius);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <SectionWrapper id="Skills">
      <Heading>
        My choice <span className="gradient-text-teal-sky">&#60; / Tech stack &#62;</span>
      </Heading>

      <div className="mx-4 flex flex-col justify-between items-center gap-10 min-h-screen bg-opacity-45 relative lg:flex-row lg:justify-around">
        <div className="px-10 lg:sticky lg:top-0 lg:z-10 lg:self-start lg:pt-[20vh] lg:pl-10">
          <div className="relative">
            <img src="/PNG/memoji.png" alt="memoji" className="h-[70%] absolute left-1/2 transform -translate-x-1/2" style={{ top: "30px" }} />
            <div
              style={{
                height: radius,
                width: radius,
                transform: `rotate(${rotateValue}deg)`,
              }}
              className={`rounded-full flex items-center justify-center relative animate-spin-wheel lg:animate-none`}
            >
              {SkillsArray.map((details, index) => {
                const marginLeft = `${(radius * Math.cos(initialAngle)).toFixed(2)}px`;
                const marginTop = `${(radius * Math.sin(initialAngle)).toFixed(2)}px`;

                initialAngle += angleIncrement;

                return (
                  <SkillCard
                    key={index}
                    {...details}
                    style={{
                      marginLeft,
                      marginTop,
                      transform: `rotate(-${rotateValue}deg)`,
                    }}
                    className={`z-10 absolute animate-spin-spokes lg:animate-none`}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <SkillLayout />
      </div>
    </SectionWrapper>
  );
};

export default React.memo(Skills);
