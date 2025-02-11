"use client"

import {  motion, Variant } from 'framer-motion'
import React, {  useRef, useState } from 'react'



const Cursor = (props: any ) => {
  return <motion.section
    animate={props.position}

    className="absolute z-0 h-7 rounded-full bg-black md:h-12  top-0 left-0 ">

  </motion.section>
}

const ListItem = (props: any) => {

  const ref = useRef<HTMLDivElement>(null);

  return <div className="mix-blend-difference  z-10 cursor-pointer px-2 py-1"
    onMouseLeave={() => {
      props.setPosition((pv: any)=>({
        ...pv,
        opacity: 0,
        scale: 0,
        
      }))
    }}
    onMouseEnter={(e) => {
      if (!ref.current) return
      const data = ref.current.getBoundingClientRect();
      props.setPosition({
        opacity: 1,
        width: data.width,
        left: ref.current.offsetLeft
      })
    }}
    ref={ref}>
    {props.children}
  </div>
}

export default function Page() {

  const [position, setPosition] = useState<Variant>(
    {
      left: 0,
      width: 0,
      opacity: 0
    }
  )

  return (
    <div className="flex-grow  w-screen h-screen flex justify-center items-center ">
      <nav className="flex flex-row gap-2 w-auto rounded-full border-gray-800 uppercase border-2 text-white 
        relative p-2 ">
        <ListItem setPosition={setPosition}>Home</ListItem>  
        <ListItem setPosition={setPosition}>Pricing</ListItem>   
        <ListItem setPosition={setPosition}>Features</ListItem>       
        <ListItem setPosition={setPosition}>Docs</ListItem>      
        <ListItem setPosition={setPosition}>Blog</ListItem>     
        <Cursor position={position} />    
      </nav>       
    </div>      
  )
}
