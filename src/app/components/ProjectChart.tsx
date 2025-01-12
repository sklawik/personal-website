
"use client"

import { motion, useInView, Variant } from 'framer-motion'
import React, { useRef } from 'react'

type ProjectChartProps = {
    title: string,
    description: React.ReactElement,
    link: string
}

export default function ProjectChart(props: ProjectChartProps) {

    let ref = useRef(null)

    let isInView = useInView(ref, {
        once: false,
        
    })

    let defaultStyle: Variant = {
        opacity: 0.2,

      y: -200
    }

    let dynamicStyle: Variant = {
        opacity: 1,
        transition:{
            duration: 0.55,

        },

        y: 0,
       
    }

  return (
    <motion.div

    animate={isInView ?  dynamicStyle : defaultStyle}
    
    ref={ref} className="flex flex-col gap-2 p-4 dark:bg-gray-950 dark:text-slate-200 rounded-xl max-w-full bg-slate-200">
        <div className="text-slate-600 dark:text-gray-300 flex flex-row justify-between"><h1>{props.title}</h1> <a target="_black" href={props.link} className=" underline px-4 py-1 rounded-xl bg-blue-800 text-xs text-center text-white hover:bg-blue-400 duration-500">link</a></div>
        <div className="text-slate-600 dark:text-gray-300">{props.description}</div>
    </motion.div>
  )
}
