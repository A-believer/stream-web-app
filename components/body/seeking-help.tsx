import { helpData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

function SeekingHelp() {
  return (
    <section className='font-ppn bg-[#138294] text-white xl:pt-[66px] md:pt-14 py-10 xl:pb-40 md:pb-28 xl:pl-16 md:pl-9 px-6 xl:pr-[86px] md:pr-9  lg:mx-[45px] md:mx-10 mx-[18px] xl:my-16 md:my-12 my-8 rounded-[20px] text-lg leading-[34px] mt-[100px] text-center xl:space-y-32 md:space-y-20 space-y-12' >
      <h3 className='xl:text-4xl md:text-2xl text-xl xl:leading-[70px] md:leading-[50px] leading-10 font-semibold xl:w-[80%] md:w-[90%] w-[95%] mx-auto flex flex-col items-center justify-center'>
        <span>Seeking help on Streams</span>
        <span>Foundation takes a few minutes</span>
      </h3>

      <div className='flex items-center justify-center flex-wrap xl:gap-x-[150px] gap-x-[94px] md:gap-y-[54px] gap-y-8'>
        {helpData.map((item) => (
          <div key={item.id} className='flex flex-col justify-center items-center gap-y-7'>
            <Image src={item.icon} alt='icons' width={100} height={100} className='object-contain '/>
            <p className='text-2xl leading-9 font-semibold'>{item.head}</p>
            <p className='w-[240px]'>{item.subHead}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SeekingHelp