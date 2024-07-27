import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ZoomImage = ({ src, alt, className = "", ...props }) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <Image src={src} alt={alt} className='w-full h-auto' priority {...props} />
    </motion.div>
  )
}

export default ZoomImage
