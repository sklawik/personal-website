"use client"

import { motion, useInView, Variant } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { AiOutlineGlobal, AiOutlineTrademark } from 'react-icons/ai';
import { DiMysql } from 'react-icons/di';
import { FaCss3, FaDocker, FaHtml5, FaJs, FaReact, FaTrademark } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiOvh, SiPrisma, SiReacthookform } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';

export default function Footer() {

    const ref = useRef(null)
    let isInView

    isInView = useInView(ref, {
        once: false
    });

    let defaultStyle: Variant = {

        padding: '2rem',
        y: '-50px',
        transition: {
            duration: 1,
            bounce: true
        },
        opacity: 0.25,
    }

    let animatedStyle: Variant = {

        opacity: 1,
        position: 'relative',
        bottom: 0,
        y: 0,
        padding: '1rem',
        transition:{
            duration: 0.5
        }

    }

    return (
        <motion.div
            ref={ref}
            animate={isInView ? animatedStyle : defaultStyle}
            className="bg-gray-950 text-white text-xs
     rounded-xl flex-grow w-full flex flex-col text-nowrap mb-4 opacity-90 justify-center text-white">
            <div className="w-max text-slate-200">
                <h6>Użyte technologie</h6>
            </div>
            <motion.div 
            transition={{
                staggerChildren: 0.5,
                delayChildren: 0.2
            }}
            animate={{
                
            }}
            initial={{
                
            }}
            className="flex sm:flex-row gap-4 w-full flex-col sm:flex hidden">

                <div className="flex flex-row gap-1 justify-center items-center ">
                    <FaReact /> React
                </div>
                <div className="flex flex-row gap-1 justify-center items-center ">
                    <RiTailwindCssFill /> TailwindCSS
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <RiNextjsFill />
                    NextJS
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <SiPrisma />
                    Prisma
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <DiMysql />
                    MySQL
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <FaHtml5 />
                    HTML
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <FaCss3 />
                    CSS
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <FaJs />
                    Javascript
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <VscJson />
                    JWT
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <SiReacthookform />
                    React Hook Form
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <FaDocker />
                    Docker
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                <AiOutlineGlobal />

                    Zustand
                </div>
            </motion.div>
            <div className="flex flex-row gap-1 text-xs mt-2 items-center sm:text-sm ">
                Sebastian Klawikowski <AiOutlineTrademark />  2025
                <a href="mailto:sebklawik@gmail.com" className="underline cursor-pointer hover:text-slate-200">kontakt e-mail</a>
                <a href="https://ovh.com" className="ml-auto flex flex-row gap-1 justify-center items-center">Strone hostuję przez OVH <SiOvh /> 😎
 </a>
            </div>

        </motion.div>
    )
}
