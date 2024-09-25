"use client"

import { motion, Variants } from 'framer-motion'

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

    const [currentVariant, setCurrentVariant] = useState('floating')

    const hidden = true

    return (
        hidden ||
            <motion.div
                variants={headerVariants}
                initial='static'
                animate={currentVariant} 
            >
                <div onClick={()=>setCurrentVariant('floating')}>animate 1</div>
                <div onClick={()=>setCurrentVariant('static')}>animate 1</div>
            </motion.div>
        
    )
}
