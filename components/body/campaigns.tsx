"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import arrow from "../../public/icons/arrow-right-direction.svg"
import arrowDark from "../../public/icons/arrow-right-direction-dark.svg"
import arrowSmall from "../../public/icons/arrow-right-small.svg"
import arrowSmallDark from "../../public/icons/arrow-right-small-dark.svg"
import heart from "../../public/icons/heart.svg"
import { data } from '@/utils/data'
import { useTheme } from 'next-themes'



function Campaigns() {
  const { theme } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === data.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
    );
  };
  return (
    <section className='xl:px-[51px] md:px-6 px-5 xl:py-[100px] md:py-20 py-14 font-ppn w-full xl:space-y-[68px] space-y-[60px]'>
      <div className='flex md:justify-between justify-center'>
        <h3 className='md:text-5xl text-2xl md:leading-[70px] leading-10 font-semibold'>Completed Campaigns</h3>
        <div className='md:flex hidden gap-x-3 items-center '>
          <Image src={theme === "light" ? arrow : arrowDark} alt='directions' className='rotate-180' onClick={handlePrevious}/>
          <Image src={theme === "light" ? arrow : arrowDark} alt='directions' onClick={handleNext}/>
        </div>
      </div>
      
      <div className='grid xl:grid-cols-3 md:grid-col-2 grid-cols-1 gap-[15px] overflow-hidden'>
       {
          data.map((items) => (
            <div key={items.id} className='border border-black/30 px-6 py-5 flex flex-col gap-y-6 w-full rounded-[20px]'>
              <Image src={items.image} alt='Images' className='w-full h-auto'/>
              <p className='xl:text-2xl md:text-xl text-lg font-medium'>{items.title}</p>
              <p className="xl:text-base md:text-sm text-xs">{items.description}</p>
              <p className='xl:text-base md:text-sm text-xs'><span className='xl:text-2xl md:text-xl text-lg font-medium'>{items.total} Naira</span> of {items.total} goal</p>
              <p className='w-full xl:h-4 md:h-[13px] h-3 bg-[#138294] rounded-[50px]'></p>
              <div className='flex justify-between items-center pb-2'>
                <p className='flex items-center gap-x-[10px]'><Image src={heart} alt='heart' /> {items.supporters} supporters</p>
                  <Image src={theme === "light" ? arrowSmall : arrowSmallDark} alt='direction' />
              </div>
          </div>
        ))
       }
      </div>

      <div className='flex md:hidden gap-x-3 items-center justify-center'>
          <Image src={theme === "light" ? arrow : arrowDark} alt='directions' className='rotate-180' onClick={handlePrevious}/>
          <Image src={theme === "light" ? arrow : arrowDark} alt='directions' onClick={handleNext}/>
        </div>

    </section>
  )
}

export default Campaigns