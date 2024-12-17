import React from 'react'
import AnimateLetters from '../components/ui/animations/AnimateLetters'
import Form from 'next/form';
import { redirect, RedirectType } from 'next/navigation';



global.likes = 0;


export default function page() {



    return (
        <div className="flex flex-col w-full h-full bg-slate-100 text-black">
            <img src="johnydixon.png" className="self-start w-full max-h-96"></img>
            <div className=" min-h-fit flex flex-col justify-start items-center text-3xl">
                <div> <h1>Czy chciałbyś przeżyć apokalipsę zombie?</h1></div>
                <div className="flex flex-row gap-1 p-2"><br />

                <AnimateLetters letters='Project Zombie Roblox'/>
                </div>
                <div className="text-sm">
                Twój najlepszy sposób na przetrwanie apokalipsy zombie. Wciel się w Johnego Dixona i poznaj prawdę o tym kto zrobił pandemię krwiorczych bestii.
                </div>
           
            </div>
            <div className="min-h-screen text-gray-800 bg-slate-200 flex flex-col items-center justify-center">
                Dev Vlog 1
                - dodano zombie
                <img src="zombi.png"></img>
                
                {global.likes} <div className="flex flex-row gap-1"><AnimateLetters letters='lajków'></AnimateLetters></div>
                <Form action={ async (e)=>{
                    "use server"
                    global.likes++
                    redirect("/projectzombieroblox", RedirectType.push);
                }}>
                      <button type="submit" className="p-4 bg-red-500 text-white">lajknij</button>

                </Form>
              
               
            </div>
            <div className="min-h-screen">
                section 3
            </div>
            <div className="min-h-screen">
                section 3
            </div>
        </div>
    )
}
