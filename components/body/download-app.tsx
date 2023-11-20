import Image from 'next/image'
import React from 'react'
import imgi from "../../public/images/appi.png"
import imgii from "../../public/images/appii.png"
import imgiii from "../../public/images/appiii.png"
import imgiv from "../../public/images/appiv.png"


function DownloadApp() {
  return (
    <section className='font-ppn text-foreground relative flex flex-col justify-center items-center font-medium xl:pt-[140px] xl:pb-[300px] text-center w-full xl:gap-y-[120px] md:gap-y-[100px] gap-y-[70px] mb-[100px]'>
      <p className='md:text-[32px] xl:leading-[64px] text-2xl leading-[48px] tracking-[0.12px] xl:w-[50%] md:w-[85%] w-full'>Download our app and join our community for donating and be part  of a positive change in the world. With over:</p>
      <h1 className='md:text-[120px] text-[60px] tracking-[0.5px]'>70,545+</h1>
      <p className='text-lg leading-9'>People already joining</p>
      <div className="border w-fit mx-auto rounded-[15px] border-foreground p-2.5 bg-[#138294] text-white md:rounded-[23.4px] px-6 py-4 border-[#000] md:text-[28px] md:leading-[52x]my-5">Yes, download and join</div>
      <Image src={imgi} alt='Image I' className='absolute xl:block hidden left-0 top-60'/>
      <Image src={imgii} alt='Image II' className='absolute xl:block hidden right-0 top-60'/>
      <Image src={imgiii} alt='Image III' className='absolute xl:block hidden left-0 bottom-0'/>
      <Image src={imgiv} alt='Image IV' className='absolute xl:block hidden right-0 bottom-0'/>
    </section>
  )
}

export default DownloadApp