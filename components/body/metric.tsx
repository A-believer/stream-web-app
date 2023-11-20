import Image from 'next/image'
import React from 'react'
import rocket from "../../public/images/rocket.png"
function Metric() {
  return (
    <section className='font-ppn text-foreground flex md:flex-row flex-col items-center justify-between xl:mx-20 md:mx-12 ml-5 mr-12 xl:my-28 md:my-14 my-8'>
      <Image src={rocket} alt='rocket'  className='xl:w-[626px] xl:h-[626px] md:w-[317px] md:h-[317px] w-full h-full'/>

      <div className='flex justify-center items-center  xl:gap-x-[160px] md:gap-x-[150px] gap-x-[80px] xl:gap-y-[77px] md:gap-y-[40px] gap-y-[35px] flex-wrap bg-[#138294]/5 xl:py-20 md:py-[71px] py-[60px] xl:px-10 md:px-6 rounded-[20px] relative'>
        <div className='flex flex-col justify-center items-center gap-[15px]'>
          <h3 className='xl:text-[60px] md:text-[30px] text-[27px]'>475K</h3>
          <p className='xl:text-lg md:text-[10px] text-[8px] xl:leading-[70px] leading-[35px]'>Registered Helpers</p>
        </div>

        
        <div className='flex flex-col justify-center items-center gap-[15px]'>
          <h3 className='xl:text-[60px] md:text-[30px] text-[27px]'>105K</h3>
          <p className='xl:text-lg md:text-[10px] text-[8px] xl:leading-[70px] leading-[35px]'>Projects Funded</p>
        </div>

        <div className='flex flex-col justify-center items-center gap-[15px]'>
          <h3 className='xl:text-[60px] md:text-[30px] text-[27px]'>200K</h3>
          <p className='xl:text-lg md:text-[10px] text-[8px] xl:leading-[70px] leading-[35px]'>Monthly Visitors</p>
        </div>
        <div className='absolute md:bottom-9 bottom-4 md:left-7 left-4 w-full h-full bg-transparent border-2 border-dashed border-[#138294] rounded-[20px]'></div>
      </div>
    </section>
  )
}

export default Metric