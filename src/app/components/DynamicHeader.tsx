"use client"

import { motion, Variants } from 'framer-motion'

import React, { useState } from 'react'

export default function DynamicHeader() {
    const headerVariants: Variants = {
        static: {
            x: 0,
            y: 0,
            position: 'fixed',
            width: '100%',
            padding: '1rem',
            backgroundColor: 'black'
        },
        floating: {
            position: 'fixed',
            margin: '0.5rem',

            marginLeft: '45%',
            marginRight: '45%',
            alignItems: 'center',
            justifyContent: 'center',
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            },
            borderRadius: '1.5rem',
            width: 'auto',
            marginTop: '1rem',



        }
    }

    const [currentVariant, setCurrentVariant] = useState('static')

    const hidden = false

    return (
        hidden ||
        <motion.div
            variants={headerVariants}
            initial='static'
            animate={currentVariant}
        >
            <section className="flex flex-row text-nowrap">
                <div onClick={() => setCurrentVariant('floating')}>animate 1</div>
                <div onClick={() => setCurrentVariant('static')}>animate 1</div>
            </section>

        </motion.div>

    )
}
