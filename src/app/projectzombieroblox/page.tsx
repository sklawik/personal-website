import React from 'react'
import AnimateLetters from '../components/ui/animations/AnimateLetters'

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
