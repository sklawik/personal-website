"use client"

import { motion } from 'framer-motion'
import Form from 'next/form'
import React from 'react'
import FadeIn from './ui/animations/FadeIn'

export default function AuthForm() {
  return (

      <Form
        className="flex flex-col gap-1 p-2
        text-slate-900 w-full select-none justify-center items-start rounded-xl bg-black flex-grow 
        [&_input]:outline-none [&_input]:w-full [&_input]:bg-slate-100 [&_input]:rounded-md [&_input]:placeholder-slate-500 [&_input]:p-0.5 " 
        action={e => {
            console.log("test");
        }}>

 
          <input className="" placeholder='adres e-mail' />
      
     
          <input className="" placeholder="hasło do konta"/>
      

      </Form>

  )
}
