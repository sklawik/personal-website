import React, { PropsWithChildren } from 'react'

export default function Button<HTMLButtonElement>(props: PropsWithChildren<HTMLButtonElement>){
  return (


        <button {...props} className="py-1 px-4 text-sm bg-white text-black rounded-md outline-none select-none cursor-pointer hover:scale-95 duration-100 hover:bg-slate-200 hover:text-sm">{props.children}</button>

   
  )
}
