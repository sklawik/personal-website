"use client"

import React from 'react'



const Cursor = () =>{
  return <section className="absolute z-0 h-7 rounded-full bg-black md:h-12  mt-1 ml-1 top-0 left-0 ">
    </section>
}

export default function page() {



  return (
    <div className="flex-grow  w-screen h-screen flex justify-center items-center ">
        <nav className="flex flex-row gap-2 w-auto rounded-full border-gray-800 uppercase border-2 text-white  p-2 [&_div]:px-2 [&_div]:py-1
        relative div:bg-red-500 [&_div]:z-10 [&_div]:m-1 [&_div]:mix-blend-difference">
          <div className="">home</div>
          <div>pricing</div>
          <div>features</div>
          <div>docs</div>
          <div>blog</div>
          <Cursor/>
        </nav>
    </div>  
  )
}
