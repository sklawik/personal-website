"use client"

import { motion } from 'framer-motion'
import Form from 'next/form'
import React from 'react'
import FadeIn from './ui/animations/FadeIn'
import { ScanFace } from 'lucide-react'

export default function AuthForm() {

  return (

      <Form
        className="flex flex-col gap-1 p-1 
        text-slate-200 w-full select-none justify-center items-start  bg-black flex-grow 
        [&_input]:outline-none [&_input]:w-full [&_input]:bg-gray-950 [&_input]:rounded-md [&_input]:placeholder-gray-400 [&_input]:p-0.5 " 
        action={e => {
            console.log("test");
        }}>

{/* {errors ?  <div><ScanFace /></div>} */}
          
         <input className="" placeholder='adres e-mail' />
    
          <input className="" placeholder="hasło do konta"/>

  
      
      
      </Form>

  )
}
