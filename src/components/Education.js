import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import LiIcons from './LiIcons'

const Details =({type,institute,time,place,info})=>{
    const ref= useRef(null)
    return(
    <li ref={ref} className='my-8 first:mt-0 last:mb:0 w-[70%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]'>
        <LiIcons reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl w-full sm:text-xl xs:text-lg'>{type}&nbsp;</h3>
            <span className='text-primary font-bold capitalize block dark:text-primaryDark '>@{institute}</span>
            <span className='ml-3 capitalize font-medium text-dark/75  dark:text-light/75 xs:text-sm md:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
    )
}

function Education() {
    const ref=useRef(null)
    const {scrollYProgress} =useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 text-center w-full
        md:text-6xl xs:text-4xl md:mb-16'>
        Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full' >
        <motion.div 
        style={{scaleY:scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                
                <Details
                type="Web Development using Python Django and React" 
                institute='Brototype'
                time="2023 July - Present" place="Kochi, Kerala"
                info="Completed 8 Month Bootcamp in advanced topics such as Full Stack development ,UI development and Data Structures." 
                />

                <Details
                type="Online course" 
                institute='Inmakes'
                time="2023 (3 month)" place="Kochi, Kerala"
                info="Completed an extensive certification course in Python and Machine Learning, equipping myself with 
                advanced skills and knowledge in these crucial areas of modern technology." 
                />

                <Details
                type="Bachelor of Computer Application - BCA" 
                institute='Pilathara Co-Op Arts & Science College '
                time="2020 Aug - 2023 Apr" place="Kannur, Kerala"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering and Web development." 
                />

           
            
            </ul>
        </div>
    </div>
  )
}

export default Education