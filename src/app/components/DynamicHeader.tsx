"use client"

import { motion, MotionConfig, Variants } from 'framer-motion'
import React from 'react'

export default function DynamicHeader() {

    const headerVariants: Variants = {
        static: {
            x: 0,
            y: 0
        },
        floating: {
            position: 'relative',
            backgroundColor: 'blue',
            height: 'auto',
            width: '8rem',
            order: 'first',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            transition:{
                duration: 1,
                ease: 'easeIn'
            },
            borderRadius: '5rem',
            padding: '0.25rem',
            scale: 0
            
        },
        scale:{
            scale: 1
        }
    }

    return (
        <section className="fixed left-0 top-0 w-full h-screen  z-10 flex flex-col justify-start items-center">
            <motion.div
            
            animate='scale'
                variants={headerVariants}
                initial='floating'
            >
                <div>stuff</div>
            </motion.div>
        </section>


    )
}
