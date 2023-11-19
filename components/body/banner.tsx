"use client"
import React from 'react'
import Marquee from 'react-fast-marquee'

function Banner() {
  return (
    <div className='w-full md:text-5xl md:leading-[70px] text-lg leading-[27px] text-white relative flex flex-col mt-[40px] mb-[200px]'>
      <div className='w-full bg-[#138294] md:py-4 py-3 absolute top-[40px] -rotate-2 z-20'>
        <Marquee  direction="left">
        <span className='xl:mx-24 md:mx-10 mx-5'>*Let’s help each other</span>
        <span className='xl:mx-24 md:mx-10 mx-5'>*Let’s help each other</span>
        <span className='xl:mx-24 md:mx-10 mx-5'>*Let’s help each other</span>
      </Marquee>
      </div>
      
      <div className='w-full bg-[#F09223] md:py-4 py-3 absolute rotate-1 z-10'>
         <Marquee direction="right">
        <span className='xl:mx-24 md:mx-10 mx-5'>*Let’s help each other</span>
        <span className='xl:mx-24 md:mx-10 mx-5'>*Let’s help each other</span>
        <span className='xl:mx-24 md:mx-10 mx-5'>*Let’s help each other</span>
      </Marquee>
     </div>
     
    </div>
  )
}

export default Banner