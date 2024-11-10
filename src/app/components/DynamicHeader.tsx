"use client";

import { motion, useViewportScroll, Variants, Variant, easeInOut, easeIn} from "framer-motion";
import React, { useState } from "react";

export default function DynamicHeader() {
    const floatingObj: Variant = {
        position: "fixed",
        margin: "0.5rem",
        marginLeft: "45%",
        marginRight: "45%",
        alignItems: "center",
        justifyContent: "center",
        transition: {
            duration: 0.5, 
            ease: "easeInOut",
        },
        width: "10rem",
        marginTop: "1rem",
        borderRadius: '1rem'
    };

    const headerVariants: Variants = {
        static: {
            x: 0,
            y: 0,
            position: "fixed",
            width: "100%",
            backgroundColor: 'black',
           padding: '0.5rem',
            color: 'white',
            textWrap: 'nowrap',
            transition:{
                ease: easeIn,
                duration: 0.25
            }
            
            
        },
        floating: floatingObj,
        floatingExpanded: {
            ...floatingObj,
            height: "10rem",
            backgroundColor: 'black',
            width: "10rem",
            transition: {
                duration: 0.25,
                ease: "easeInOut",
            },
           
        },
        floatingFullscreen: {
            width: '100%',
            height: '100%'
        }
    };

    const [currentVariant, setCurrentVariant] = useState("static");
    const hidden = false;

    function handleNavbarClick() {
        setCurrentVariant((prev) =>
            prev === "floating" ? "floatingExpanded" : "floating"
        );
    }


    let {scrollY} = useViewportScroll()

    scrollY.on('change', (lastValue)=>{
        if(lastValue >= 10){
            setCurrentVariant('floating')
        }else{
            setCurrentVariant('static')
        }
    })

    return (
        hidden || (
            <motion.div
                variants={headerVariants}
                initial="static"
                animate={currentVariant}
                onHoverEnd={() =>
                    currentVariant === "floatingExpanded" &&
                    setCurrentVariant("floating")
                }
            >
                <section
                    className="flex flex-row gap-1 duration-500 select-none"
                    onClick={handleNavbarClick}
                >
                    <div onClick={() => setCurrentVariant("floating")}>
                        animate 1
                    </div>
                    <div onClick={() => setCurrentVariant("static")}>
                        animate 2
                    </div>
                </section>
            </motion.div>
        )
    );
}