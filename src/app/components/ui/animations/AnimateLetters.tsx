"use client"

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

type AnimateLettersProps = {
    letters: string
}

export default function AnimateLetters( props: AnimateLettersProps) {

    const letters: string[] = []

    for (let i = 0; i < props.letters.length; i++) {
        letters.push(props.letters[i])
    }




    return (
        <AnimatePresence >
            {letters.map((letter, index) =>
                <motion.div className="" key={index}
                    initial={{
                        y: -5,
                        opacity: 0,

                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            delay: index * 0.02,
                            ease: 'easeIn'
                        },
                       
                    }}
                >
                    {letter=='_' ? '\u00A0' : letter}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
