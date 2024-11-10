"use client"

import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  variant?: 'ghost' | 'default',
  children: ReactNode
}

export default function Button(props: ButtonProps) {

  const styles = [
    {
      variant: 'ghost',
      style: "text-slate-100  bg-slate-950 border-2 duration-100 border-slate-800 px-3 py-0.5 hover:bg-black ",
    },
    {
      variant: 'default',
      style: "py-1 px-3 rounded-sm bg-white text-slate-800 outline-none select-none cursor-pointer duration-250 hover:bg-slate-200 border-gray-500 transition-all dark:bg-black dark:text-white dark:border-2 dark:border-slate-900"
    }


  ]

  return (
    <button {...props} className={twMerge(props.variant === 'ghost' ? styles[0].style : styles[1].style)} >{props.children}</button>


  )
}
