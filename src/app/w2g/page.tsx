

import { revalidatePath } from 'next/cache'
import Form from 'next/form'
import React from 'react'


let currentVideoUrl: undefined | string = undefined

export default async function page() {
  return (
  <div className = "w-full h-full flex flex-row justify-center items-center text-black">
        <Form action={ async (e: FormData)=>{
            "use server"
            
            currentVideoUrl = e.get('url')?.toString()
            revalidatePath("/w2g")
        }}
        >

{currentVideoUrl != undefined && 
<div>
  
    <iframe width="560" height="315" src={currentVideoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
    }
        <input type="text" name="url"/>
        <button type='submit'>Przeslij</button>
        </Form>
        {currentVideoUrl == undefined && <div>Zadne video nie jest grane</div>}
     

  </div>
  )
}
