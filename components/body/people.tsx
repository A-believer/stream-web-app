import Image from 'next/image'
import React from 'react'
import arrow from "../../public/icons/arrow-right-direction.svg"
import arrowSmall from "../../public/icons/arrow-right-small.svg"
import heart from "../../public/icons/heart.svg"
import { data } from '@/utils/data'


function People() {
  return (
    <section className='xl:px-[51px] md:px-6 px-5 xl:py-[100px] md:py-20 py-14 font-ppn w-full xl:space-y-[68px] space-y-[60px]'>
      <div className='flex md:justify-between justify-center'>
        <h3 className='md:text-5xl text-2xl md:leading-[70px] leading-10 font-semibold'>People in Extreme Need</h3>
        <div className='md:flex hidden gap-x-3 items-center '>
          <Image src={arrow} alt='directions' className='rotate-180'/>
          <Image src={arrow} alt='directions'/>
        </div>
      </div>
      
      <div className='grid xl:grid-cols-3 md:grid-col-2 grid-cols-1 gap-x-[15px]'>
       {
          data.map((items) => (
            <div key={items.id} className='border border-black/30 px-6 py-5 flex flex-col gap-y-6 w-full rounded-[20px]'>
              <Image src={items.image} alt='Images' className='w-full h-auto'/>
              <p className='xl:text-2xl md:text-xl text-lg font-medium'>{items.title}</p>
              <p className="xl:text-base md:text-sm text-xs">{items.description}</p>
              <p className='xl:text-base md:text-sm text-xs'><span className='xl:text-2xl md:text-xl text-lg font-medium'>{items.raised} Naira</span> of {items.total} goal</p>
              <p className='w-full xl:h-4 md:h-[13px] h-3  rounded-[50px] bg-[#E8E8E8]'><span className='w-[70%] bg-[#138294] xl:h-4 md:h-[13px] h-3 rounded-[50px]'></span></p>
              <div className='flex justify-between items-center pb-2'>
                <p className='flex items-center gap-x-[10px]'><Image src={heart} alt='heart' /> {items.supporters} supporters</p>
                  <Image src={arrowSmall} alt='direction' />
              </div>
          </div>
        ))
       }
      </div>

      <div className='flex md:hidden gap-x-3 items-center justify-center'>
          <Image src={arrow} alt='directions' className='rotate-180'/>
          <Image src={arrow} alt='directions'/>
        </div>

    </section>
  )
}

export default People