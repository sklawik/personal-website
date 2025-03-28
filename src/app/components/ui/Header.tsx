import React from 'react'
import {MotionDiv} from './animations/MotionDiv'
import AnimateLetters from './animations/AnimateLetters'


export default function Header() {
    return (
        <div className="w-full  text-slate-200 sticky top-0 left-0 backdrop-blur-2xl flex flex-row justify-start items-center ">
            <div className="flex flex-row items-center justify-center p-0.5 w-full">
                <AnimateLetters letters='Sebastian_Klawikowski'></AnimateLetters>
                <MotionDiv 
                initial={{
                    x: 10,
                    scale: 0.99,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    transition:{
                        duration: 0.5,
                        ease: 'easeIn',
                        delay: 0.75
                    }
                }}
                >
                    <h3 className="text-xs text-slate-300 ml-4 cursor-pointer" title="(starting from Scratch 😉)">+10 years of experience in creation of computer software as hobbyist  </h3>
                </MotionDiv>

            </div>

        </div>
    )
}
