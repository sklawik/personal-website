"use client";

import { motion, Variants } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";

type TextSliderProps = {
  trigger: ReactNode;
  children: ReactNode;
  openAtStart?: boolean
};

export default function TextSlider(props: TextSliderProps) {
  const variants: Variants = {
    hidden: {
      opacity: 1,

      scale: 1,
      style: {
        color: "#ffffff",
      },
      height: 'auto',
    },
    shown: {
      opacity: 0.5,
      height: 0,

      scale: 0.75,
      transition: {
        duration: 0.35
      },
      style: {
        color: 'gray',
      },
    },
  };

  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const savedContentHeight = useRef(0);
  const [currentVariant, setCurrentVariant] = useState("shown");

  useEffect(() => {
    if (contentRef.current) {
      const currentOffsetHeight = contentRef.current.offsetHeight;
      if (currentOffsetHeight != 0) {
        console.log("savedcontentheight: " + currentOffsetHeight);
        savedContentHeight.current = contentRef.current.offsetHeight;
        setContentHeight(currentOffsetHeight);
      }
    }
  }, []);

  return (
    <button
      className="w-40 overflow-hidden"
       
    >
      <div
        ref={contentRef}
        
        onClick={() => {
          setCurrentVariant(currentVariant == "shown" ? "hidden" : "shown");
          setContentHeight(
            contentHeight == savedContentHeight.current
              ? 600
              : savedContentHeight.current
          );
        }}
      >
       {props.trigger}
      </div>
      <motion.div
      initial={props.openAtStart==false ? 'hidden' : 'shown'}
        variants={variants}
        animate={currentVariant}
        transition={{
          duration: 0.5
        }}
      >
        {props.children}
      </motion.div>
    </button>
  );
}
