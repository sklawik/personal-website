"use client";

import {
    motion,
    useViewportScroll,
    Variants,
    Variant,
    easeInOut,
    easeIn,
} from "framer-motion";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import AnimateLetters from "./ui/animations/AnimateLetters";
import { useTheme } from "@/app/store";
import { LogIn, Moon, SunMoon } from "lucide-react";
import AuthForm from "./AuthForm";
import Button from "./ui/Button";
export default function DynamicHeader() {
    const floatingObj: Variant = {
        position: "fixed",
        margin: "0.5rem",
        marginLeft: "45%",
        marginRight: "45%",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
        width: "10rem",
        marginTop: "1rem",
        borderRadius: "1rem",
    };

    const headerVariants: Variants = {
        static: {
            x: 0,
            y: 0,
            position: "fixed",
            width: "100%",
            minHeight: "2.5rem",
            height: "auto",
            backgroundColor: "black",
            padding: "0.5rem",
            color: "white",
            textWrap: "nowrap",
            userSelect: "none",
            transition: {
                ease: easeIn,
                duration: 0.25,
            },
        },
        floating: floatingObj,
        floatingExpanded: {
            ...floatingObj,
            height: "auto",
            minHeight: "8rem",
            backgroundColor: "black",
            width: "24rem",
            marginLeft: "40%",
            marginRight: "40%",
            transition: {
                duration: 0.25,
                ease: "easeInOut",
            },
        },
        floatingFullscreen: {
            width: "100%",
            height: "100%",
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

    let { scrollY } = useViewportScroll();

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
                style={{
                    userSelect: "none",
                }}
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
                <div className="flex select-none outline-none flex-row gap-1 justify-between items-center">
                    <div>
                        {" "}
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
                {currentVariant == 'floatingExpanded' && <div className="p-1 h-full flex flex-col">
                    {selectedOption == "none" &&
                        <div className="flex flex-col gap-2 w-full   flex-grow">
                            <AuthForm />
                            <div className="flex flex-row text-wrap text-xs w-full items-end justify-between">
                                <div className="flex flex-row gap-2  transition-all p-0.5">
                                    <div className="text-xl cursor-pointer peer ">?</div>
                                    <div className="opacity-0 peer-hover:opacity-100 relative duration-500">Jeśli nie masz konta, wystarczy że wprowadzisz dane tak jakby tworzyć nowe.</div>
                                </div>

                                <div className="cursor-pointer hover:bg-slate-200 hover:text-black p-0.5 rounded-md duration-500"><LogIn /></div>
                                {/* +1000 aktywnych użytkowniów w tym momencie */}
                                {/* +5 użytkowników było online w ostatnich 30 minutach
                              <a href="/online">Zobacz kto</a> */}
                            </div>

                        </div>}
                    {selectedOption == "settings" && (
                        <div className="flex flex-row gap-1">
                            <div
                                onClick={(e) => {
                                    theme.setTheme();
                                }}
                                className="bg-white flex gap-2 dark:bg-black border-2 border-slate-200 dark:border-gray-900 dark:hover:bg-gray-900 cursor-pointer hover:bg-slate-200 dark:text-white flex-row text-slate-800 text-sm px-4 py-0.5 rounded-md text-nowrap w-auto"
                            >
                                <div className="flex flex-row">
                                    <AnimateLetters letters="Zmień_motyw"></AnimateLetters>
                                </div>
                                <div className="justify-center items-center flex flex-row">
                                    {theme.darkmode ? <Moon size="16" /> : <SunMoon size="16" />}
                                </div>
                            </div>
                        </div>
                    )}
                </div>}

            </motion.div>
        )
    );
}
