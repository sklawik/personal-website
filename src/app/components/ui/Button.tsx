import React, { ReactNode } from 'react'

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
      style: "py-1 px-3  bg-white text-slate-800 outline-none select-none cursor-pointer duration-250 hover:bg-slate-200 border-gray-500 transition-all"
    }


  ]

  return (
    <button {...props} className={props.variant === 'ghost' ? styles[0].style : styles[1].style} >{props.children}</button>


  )
}
