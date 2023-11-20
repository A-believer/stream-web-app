/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import t1 from "../../public/images/t1.png"
import t2 from "../../public/images/t2.png"
import t3 from "../../public/images/t3.png"
import t4 from "../../public/images/t4.png"
import t5 from "../../public/images/t5.png"
import t6 from "../../public/images/t6.png"
import t7 from "../../public/images/t7.png"
import t8 from "../../public/images/t8.png"
import t9 from "../../public/images/t9.png"
import t10 from "../../public/images/t10.png"
import t11 from "../../public/images/t11.png"
import t12 from "../../public/images/t12.png"
import stars from "../../public/icons/stars.svg"

function Testimonials() {
  return (
    <section className='font-ppn md:my-[140px] w-full'>
      <h3 className='md:text-5xl text-2xl md:leading-[70px] leading-10 font-semibold text-center w-full'>Testimonials</h3>

      <div className='flex justify-between items-center gap-x-16 mt-10'>
        <div className='self-start'>
          <p className='xl:w-[590px]  md:text-2xl text-lg md:leading-[60px] leading-[45px] font-medium'>"This platform is a Godsend! It's a portal for volunteers to connect with people in need. My family has been in critical health condition for almost a year but this platform made it so easy for me and connected me with people willing to help, as i am not so stable financially."</p>
          <p className='text-[#138294] text-2xl mt-10 mb-4'>Mariam. C</p>
          <Image src={stars} alt='stars'/>
        </div>
      <div className='xl:flex hidden flex-wrap gap-[5px]'>
        <Image src={t1} alt='images'/>
        <Image src={t2} alt='images'/>
        <Image src={t3} alt='images'/>
        <Image src={t4} alt='images'/>
        <Image src={t5} alt='images'/>
        <Image src={t6} alt='images'/>
        <Image src={t7} alt='images'/>
        <Image src={t8} alt='images'/>
        <Image src={t9} alt='images'/>
        <Image src={t10} alt='images'/>
        <Image src={t11} alt='images'/>
        <Image src={t12} alt='images'/>
      </div>
      </div>
      
    </section>
  )
}

export default Testimonials