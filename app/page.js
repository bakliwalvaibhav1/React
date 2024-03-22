"use client";

import Header from "../components/Header/Header";
import Main from "@/components/Main/Main";
import { useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Page() {
  const [prev, setPrev] = useState(0);
  const [latest, setLatest] = useState(0);

  const scrollChangeHandler = (prev, latest) => {
    setPrev(prev);
    setLatest(latest);
  };

  return (
    <>
      <GoogleAnalytics gaId="G-9HDQGFFC0B" />
      <div id="back-drop"></div>

      <div id="root" className="relative">
        <Header prevScroll={prev} latestScroll={latest} />
        <Main scrollChange={scrollChangeHandler} />
      </div>
    </>
  );
}
