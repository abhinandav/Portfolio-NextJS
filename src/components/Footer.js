import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center lg:py-2'>
                Build By
                <span className='text-primary text-2xl px-1'>
                    &#9825;
                </span>
                Abhinand
            </div>
            <Link href="/">Say Hello</Link>

        </Layout>
    </footer>
  )
}

export default Footer