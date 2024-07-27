import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import  { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon, InstaIcon } from './Icons'
import {motion} from 'framer-motion'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'
import AnimatedName from './AnimatedName'




const CustomLink=({href,title,className=""})=>{
    const router=useRouter()
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[1px] inline-block  bg-dark 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath== href ? 'w-full':'w-0'}
            dark:bg-light`}
            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink=({href,title,className="",toggle})=>{
    const router=useRouter()
    const handleClick=()=>{
        toggle()
        router.push(href)
    }
    return(
        <button href={href} onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}
            <span className={`
            h-[1px] inline-block  bg-light 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath== href ? 'w-full':'w-0'}
            dark:bg-dark`}
            >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode,setMode]=useThemeSwitcher()
    const [open,setIsOpen]=useState(false)

    const handleClick=()=>{
        setIsOpen(!open)
    }

  return (
    <header className='w-full px-32 py-8 font-medium flex justify-between items-center
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

        <button onClick={handleClick} className=' flex-col items-center justify-center hidden lg:flex'>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${open?'rotate-45 translate-y-1':'-translate-y-0.5'}`} ></span>
            <span className={`bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${open?'opacity-0':'opacity-100'}`} ></span>
            <span className={`bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${open?'-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
        </button>

        <div className='absolute hidden lg:flex ml-10 mx-5 text-xl'>
            <AnimatedName text='I&apos;m &nbsp;Abhinand'/>
        </div>

       <div className=' w-full flex justify-between items-center lg:hidden'>
            <nav className='flex flex-row'>
                <div>
                    <AnimatedName text='I&apos;m &nbsp;Abhinand' className='-ml-10 mr-10 !text-2xl'/>
                </div>
                <div>
                    <CustomLink href='/' title='Home' className='mr-4'/>
                    <CustomLink href='/about' title='About Me' className='mx-4' />
                    <CustomLink href='/projects' title='Projects' className='mx-4'/>
                </div>    
            </nav>

            <nav className='flex items-center justify-center flex-wrap '>
                    <motion.a href='https://www.linkedin.com/in/avabhinand ' target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className='w-6 mr-3'>
                        <LinkedInIcon/>
                    </motion.a>

                    <motion.a href='https://github.com/abhinandav' target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className='w-6 mx-3'>
                        <GithubIcon/>
                    </motion.a>



                <button
                onClick={()=>setMode(mode=="light" ? "dark":"light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                `}>
                    {
                        mode=="dark"? <SunIcon className={'fill-dark'}/>
                        :
                        <MoonIcon className={'fill-dark'}/>
                    }
                </button>

            </nav>
       </div>

{/* mobile */}
      {open ?
        <motion.div
        initial={{scale:0,opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1,opacity:1,
            transition:{
                duration:.4,
            }
        }}
        className=' min-w-[70vw] flex flex-col justify-between items-center fixed left-1/2 top-1/2
       -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
           <nav className='flex flex-col justify-between'>
                   <CustomMobileLink href='/' title='Home' className='' toggle={handleClick}/>
                   <CustomMobileLink href='/about' title='About Me' className='' toggle={handleClick} />
                   <CustomMobileLink href='/projects' title='Projects' className='' toggle={handleClick}/>
           </nav>

           <nav className='flex items-center justify-center flex-wrap mt-2'>

                <motion.a href='https://www.linkedin.com/in/avabhinand' target={"_blank"}
                   whileHover={{y:-2}}
                   whileTap={{scale:0.9}}
                   className='w-6 mx-3 sm:mx-1'>
                       <LinkedInIcon/>
                   </motion.a>

                <motion.a href='https://github.com/abhinandav' target={"_blank"}
                   whileHover={{y:-2}}
                   whileTap={{scale:0.9}}
                   className='w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark'>
                       <GithubIcon/>
                   </motion.a>



               <button
               onClick={()=>setMode(mode=="light" ? "dark":"light")}
               className={`ml-3 flex items-center justify-center rounded-full p-1
               ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
               `}>
                   {
                       mode=="dark"? <SunIcon className={'fill-dark'}/>
                       :
                       <MoonIcon className={'fill-dark'}/>
                   }
               </button>

               
           </nav>
        </motion.div>
    :null}



        <div className='absolute left-[50%] top-2 translate-x-[-50%] xs:hidden sm:hidden'>
            <Logo className=''/>
        </div>
    </header>
  )
}

export default NavBar


