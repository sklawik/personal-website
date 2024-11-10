"use client"

import { motion } from 'framer-motion'
import Form from 'next/form'
import React from 'react'

export default function AuthForm() {
  return (
 <div>
    <Form 
    className="flex flex-col gap-1 [&_input]:bg-black select-none [&_input]:outline-none justify-center items-center rounded-xl bg-black"
    action={e=>{

    }}>
      <motion.input
        initial={{
          x: -100,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5

        }}
      placeholder='login'></motion.input>
      <motion.input 
      initial={{
        x: -100,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.5

      }}
      placeholder='password'></motion.input>
        <div>

        </div>
        
    </Form>
 </div>
  )
}
