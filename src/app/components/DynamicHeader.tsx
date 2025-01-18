"use client";

import {
  motion,
  useViewportScroll,
  Variants,
  Variant,
  easeInOut,
  easeIn,
  useScroll,
} from "framer-motion";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import AnimateLetters from "./ui/animations/AnimateLetters";
import { useTheme } from "@/app/store";
import { LogIn, Moon, SunMoon } from "lucide-react";
import AuthForm from "./AuthForm";
import Button from "./ui/Button";
import dynamic from "next/dynamic";

export default function DynamicHeader() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 700;

  const floatingObj: Variant = {
    position: "fixed",

    // marginLeft: isMobile? "35%": "50%",
    translateX: isMobile ? "43svw" : "45vw",
    transformOrigin: "center",
    // marginRight: "45%",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
    width: isMobile ? "2rem" : "10rem",
    minWidth: "8rem",
    marginTop: isMobile ? "calc(1rem + env(safe-area-inset-top, 0px))" : "1rem",
    borderRadius: "1rem",
  };

  const headerVariants: Variants = {
    static: {
      width: "100svw",
      maxWidth: "100%",
      height: "2.5rem",
      transformOrigin: "center",
      translateX: 0,
      translateY: 0,
      originX: 0,
      originY: 0,

      position: "fixed",

      backgroundColor: "black",
      padding: "0.5rem",
      color: "white",
      textWrap: "nowrap",
      userSelect: "none",
      transition: {
        ease: easeIn,
        duration: 0.25,
      },
      overflow: "hidden",
    },
    floating: floatingObj,
    floatingExpanded: {
      ...floatingObj,

      backgroundColor: "black",
      // translateX: isMobile ? "95%" : "20rem" ,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
      overflow: "hidden",
      width: isMobile ? "100svw" : "20rem",

      minHeight: "8rem",
      height: "auto",
      translateX: isMobile ? "0vw" : "42vw",
      // marginLeft: isMobile ? "2%" : "0%",
      // marginRight: isMobile ? "2%" : "0%",
    },
    floatingFullscreen: {
      translateX: "100%",
      translateY: "100%",
    },
  };

  const [selectedOption, setSelectedOption] = useState<"settings" | "none">(
    "none"
  );
  const [isCursorOnNavbar, setIsCursorOnNavbar] = useState<boolean>(false);
  const [currentVariant, setCurrentVariant] = useState("static");
  const hidden = false;

  function handleNavbarClick() {
    if (currentVariant != "floatingExpanded") {
      setCurrentVariant((prev) =>
        prev === "floating" ? "floatingExpanded" : "floating"
      );
    }
  }

  let { scrollY } = useScroll();

  scrollY.on("change", (lastValue) => {
    if (lastValue >= 10) {
      setCurrentVariant("floating");
    } else {
      setCurrentVariant("static");
    }
  });

  let theme = useTheme();

  return (
    hidden || (
      <motion.div
        variants={headerVariants}
        initial="static"
        animate={currentVariant}
        onHoverStart={() => {
          setIsCursorOnNavbar(true);
        }}
        onHoverEnd={() => {
          if (currentVariant == "floatingExpanded") {
            setCurrentVariant("floating");
            setSelectedOption("none");
          }
          setIsCursorOnNavbar(false);
        }}
        onClick={handleNavbarClick}
      >
        <div className="flex select-none outline-none flex-row gap-1 h-auto justify-between items-center cursor-pointer">
          <div>
            {currentVariant != "floatingExpanded" ? (
              <div className="flex flex-row gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock-keyhole"
                >
                  <circle cx="12" cy="16" r="1" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>
              </div>
            ) : (
              <div className="flex flex-row gap-4 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock-keyhole-open select-none"
                >
                  <circle cx="12" cy="16" r="1" />
                  <rect width="18" height="12" x="3" y="10" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
                </svg>
              </div>
            )}
          </div>
          <div
            className={twMerge(
              "hover:bg-gray-800 p-1 select-none cursor-pointer duration-500 rounded-md ",
              selectedOption == "settings" && "bg-gray-800"
            )}
            onClick={(e) => {
              selectedOption == "settings"
                ? setSelectedOption("none")
                : setSelectedOption("settings");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-settings-2"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
          </div>
        </div>
        {currentVariant == "floatingExpanded" && (
          <div className="p-1 flex flex-col">
           
              {selectedOption == "none" && (
              <div className="flex flex-col gap-1 w-full h-auto text-wrap ">
                <AuthForm /> 
              </div>)}
             {selectedOption == "settings" && (
              <div className="flex flex-row gap-1 mt-2">
                <div
                  onClick={(e) => {
                    theme.setTheme();
                  }}
                  className="bg-transperent flex gap-2 dark:bg-slate-800 border-2 border-slate-800 dark:border-gray-900 dark:hover:bg-gray-900 cursor-pointer hover:bg-slate-800 dark:text-white flex-row text-slate-200 text-md px-2 py-2 rounded-md text-nowrap w-auto"
                >
                  <div className="justify-center items-center flex flex-row">
                    {theme.darkmode ? (
                      <Moon size="16" />
                    ) : (
                      <SunMoon size="16" />
                    )}
                  </div>
                </div>
              </div>
             )}
          </div>
        )}
      </motion.div>
    )
  );
}
