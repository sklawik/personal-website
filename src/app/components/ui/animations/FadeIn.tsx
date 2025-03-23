"use client"
import { easeIn, easeInOut, motion } from 'framer-motion'
import React, { PropsWithChildren } from 'react'

export default function FadeIn (props: PropsWithChildren) {

  return (
    <motion.div
    className=" w-auto"
    initial={{ 
        x: -50,
        opacity: 0.5,
        scale: 0.5
    }}
    animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 0.25,
        ease: easeIn
    }}
    >
        {props.children}
    </motion.div>
  )
}
