"use client"

import { motion, MotionConfig, Variants } from 'framer-motion'
import { header } from 'framer-motion/client'
import React, { useState } from 'react'

export default function DynamicHeader() {

   



    const headerVariants: Variants = {
        static: {
            x: 0,
            y: 0,
            position: 'fixed'
        },
        floating: {
            position: 'fixed',
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
            borderRadius: '2.5rem',
            padding: '0.25rem',
            
            
        }
    }

    let [currentVariant, setCurrentVariant] = useState('floating')

    return (
            <motion.div
                variants={headerVariants}
                initial='static'
                animate={currentVariant} 
            >
                <div onClick={e=>setCurrentVariant('floating')}>animate 1</div>
                <div onClick={e=>setCurrentVariant('static')}>animate 1</div>
            </motion.div>
    )
}
