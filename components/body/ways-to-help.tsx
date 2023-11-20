/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import imagei from "../../public/images/waytohelpi.png"
import imageii from "../../public/images/waytohelpii.png"
import Link from 'next/link'

function WaystoHelp() {
  return (
    <section className='xl:px-[57px] md:px-10 px-5 xl:py-10 py-5 text-foreground w-full'>
      <div className='text-center space-y-5'>
        <h3 className='md:text-5xl text-2xl md:leading-[70px] leading-10 font-semibold'>Ways to Help</h3>
        <p className='text-lg leading-9 font-medium tracking-[0.09px]'>This goal is ambitious, but we know it’s achievable with your help. Here's how you can take action today</p>
      </div>

      <div className='xl:text-[32px] md:text-3xl text-2xl flex xl:flex-row flex-col-reverse justify-between items-center gap-y-10 xl:my-10 md:my-32 my-20 w-full'>

       <div className='text-left flex items-center flex-col justify-center xl:gap-y-[62px] gap-y-10'>
        <h3 className=' md:leading-[70px] leading-10 font-semibold'>Make a monthly Donation</h3>
          <p className='text-lg leading-9 font-medium tracking-[0.09px] xl:w-[452px] w-full'>
            Lorem ipsum dolor sit amet consectetur. Eu tincidunt sapien bibendum aenean lectus aenean egestas aliquet fringilla. Enim facilisi a elementum mauris bibendum. Pharetra consectetur amet laoreet luctus lacinia.
          </p>
        </div>

        <div className='p-9 bg-[#ebfcff]'>
        <Image src={imagei} alt='Image I'/>
        </div>
      </div>

      <div className='xl:text-[32px] md:text-3xl text-2xl flex xl:flex-row-reverse flex-col-reverse justify-between items-center gap-y-10 xl:my-10 md:my-32 mt-20 mb-10 w-full'>

       <div className='text-left flex items-center flex-col justify-center xl:gap-y-[62px] gap-y-10'>
        <h3 className=' md:leading-[70px] leading-10 font-semibold'>Sponsor a school project</h3>
          <p className='text-lg leading-9 font-medium tracking-[0.09px] xl:w-[452px] w-full'>
            Lorem ipsum dolor sit amet consectetur. Eu tincidunt sapien bibendum aenean lectus aenean egestas aliquet fringilla. Enim facilisi a elementum mauris bibendum. Pharetra consectetur amet laoreet luctus lacinia.
          </p>
        </div>

        <div className='p-9 bg-[#ebfcff]'>
        <Image src={imageii} alt='Image II'/>
        </div>
      </div>

      <div className="border w-fit mx-auto rounded-[15px] border-foreground p-2.5 bg-[#138294] text-white md:rounded-[23.4px] px-6 py-4 border-[#000] md:text-[28px] md:leading-[52x]my-5">Become a Helper</div>
    </section>
  )
}

export default WaystoHelp