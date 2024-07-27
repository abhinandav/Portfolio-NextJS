import React from 'react'
import { motion } from 'framer-motion'

const quote = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.08,
    },
  },
}

const singleCharacter = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
}

function AnimatedName({ text, className = "" }) {
  return (
    <motion.h1
      className={`text-dark  dark:text-light ${className}`}
      variants={quote}
      initial="initial"
      animate="animate"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={char + '-' + index}
          variants={singleCharacter}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default AnimatedName
