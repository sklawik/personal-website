"use client"

import { motion, Variant, Variants } from 'framer-motion'

import React, { useState } from 'react'

export default function DynamicHeader() {

    const floatingObj =  {
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

    const headerVariants: Variants = {
        static: {
            x: 0,
            y: 0,
            position: 'fixed',
            width: '100%',

        },
        floating: floatingObj,
        floatingExpanded: {
            ...floatingObj,
            height: '10rem',


            transition:{
                duration: '1s',
                ease: 'backInOut'
                
            }
        }
    }

    const [currentVariant, setCurrentVariant] = useState('static')

    const hidden = false

    function handleNavbarClick(e: any){
        if(currentVariant == 'floating'){
            setCurrentVariant('floatingExpanded')
        }else{
            setCurrentVariant('floating')
        }
       
    }

    return (
        hidden ||
        <motion.div
            variants={headerVariants}
            initial='static'
            animate={currentVariant}
            onHoverEnd={e=>currentVariant=='floatingExpanded' && setCurrentVariant('floating')}
        >
            <section className="flex flex-row text-nowrap w-full px-20 h-full bg-black gap-1 p-2 rounded-xl hover:bg-gray-900 duration-500 select-none"
            onClick={e=>handleNavbarClick(e)}>
                <div onClick={() => setCurrentVariant('floating')}>animate 1</div>
                <div onClick={() => setCurrentVariant('static')}>animate 1</div>
            </section>

        </motion.div>

    )
}
