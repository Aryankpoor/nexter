import React from 'react'
import Image from 'next/image'
const Layout = ({ children } : {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen'>
        <section className='bg-brand p-10'>
            <div>
                <Image src="/logo.png" alt="logo" width={224} height={82} className='h-auto'></Image>
            </div>
            <div className='space-y-5 text-white'>
                <h1 className='h1'>Store your files the best way</h1>
                <p className='body-1'>
                    The place to store your important data
                </p>
            </div>
            <Image src="/illustration.png" alt="files" width={342} height={342} className='transition-all hover:rotate-2 hover:scale-105'></Image>
        </section>
        {children}
    </div>
  )
}

export default Layout