import React from 'react'
import {motion} from 'framer-motion'


const quote={
    initial:{opacity:1},
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08,

        }
    }
}

const singleword={
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    }
}
function AnimatedText({text,className=""}) {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center text-bold
    overflow-hidden sm:py-0'>
        <motion.h1 className={`inline-block w-full text-dark capitalize text-8xl text-bold dark:text-light ${className}`}
        variants={quote}
        animate="animate"
        initial="initial"
        >
        {
            text.split(" ").map((word,index)=>
            <motion.span key={word+'-'+index} className='inline-block'
            variants={singleword}
            >
                {word}&nbsp;
            </motion.span>
            )
        }
        </motion.h1>
    </div>
  )
}

export default AnimatedText