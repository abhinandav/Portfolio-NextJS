import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import skillbridge from '../../public/images/projects/1.png'
import toeman from '../../public/images/projects/4.png'
import netflix from '../../public/images/projects/3.png'
import olx from '../../public/images/projects/5.png'
import noteapp from '../../public/images/projects/7.png'
import todoapp from '../../public/images/projects/6.png'

import TransitionEffect from '@/components/TransitionEffect'
import ZoomImage from '@/components/ZoomImage'
import ParticleContainer from '@/components/ParticleContainer'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-3xl p-12 
        relative rounded-br-2xl dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light 
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] '/>
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <ZoomImage src={img} alt={title} className='w-full h-auto' priority/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                    sm:px-4 sm:text-base'>
                        Live Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-s-2xl border border-solid
         border-dark bg-light p-6 relative dark:bg-dark dark:border-light
         xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[101%] xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg' priority>
                <ZoomImage src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link href={link} target='_blank' className='text-lg  font-semibold underline md:text-base'>
                        Live
                    </Link>

                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                    
                </div>
            </div>
        </article>
    )
}

function Projects() {
  const [mode] = useThemeSwitcher();

    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content='projects page' />
            </Head>

            <TransitionEffect/>

            <ParticleContainer theme={mode} />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title='SkillBridge - Elearning App'
                                summary='SkillBridge is an advanced e-learning platform built with Python Django and React. It offers features like payment integration, OTP verification, and live chat for real-time interactions, making online learning accessible and efficient for educators and students.'
                                link='https://learn.skillbridge.store/'
                                type='Feature project'
                                github='https://github.com/abhinandav/SkillBridge-Elearning-Application'
                                img={skillbridge}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Netflix Apllication Clone'
                                link='https://netflilx.vercel.app/'
                                type='Mini-Project'
                                github='https://github.com/abhinandav/Netflix-react-clone'
                                img={netflix}
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                    title='OLX Platform'
                                    link='https://oilx-react.vercel.app/'
                                    type='Project'
                                    github='https://github.com/abhinandav/Olx-Recat-Clone'
                                    img={olx}
                                />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject
                                    title='Toeman.online E-commerce website'
                                    summary='Toeman is an e-commerce app focused on selling and purchasing footwear.
                                     Built with Django, it offers features like discount coupons, referral discounts,
                                     wallet pay and integrated Razorpay for secure payments, providing a seamless shopping experience.'
                                    link='https://store.toeman.online/'
                                    type='Feature project'
                                    github='https://github.com/abhinandav/Toeman-DjangoEcommerce'
                                    img={toeman}
                                />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                    title='Online Note Saver '
                                    link='https://writenote.vercel.app/login'
                                    type='Project'
                                    github='https://github.com/abhinandav/Online-Note'
                                    img={noteapp}
                                />
                            </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                    title='Goal Setter'
                                    link='https://setgoals-app.vercel.app/'
                                    type='Project'
                                    github='https://github.com/abhinandav/TODO-using-React'
                                    img={todoapp}
                                />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects



