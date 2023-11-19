import React from 'react'
import Links from './link'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import play from "../../public/icons/play.svg"
import hand from "../../public/images/hero-imageIII.png"
import download from "../../public/icons/arrow-right.svg"
import downloadI from "../../public/icons/arrow-right-black.svg"
import loveHand from "../../public/icons/love-hand.svg"
import smiley from "../../public/icons/smilely-face.svg"
import heroI from "../../public/images/hero-imageI.png"
import heroII from "../../public/images/hero-imageII.png"
import heroIV from "../../public/images/hero-imageIV.png"

function Hero() {
  return (
      <section className='w-full xl:pt-[73px] md:pt-[53px] pt-[35px] md:px-10 px-5 font-ppn'>
          <div className='w-full text-center space-y-10'>
              <div className='space-y-8'>
                  <h1 className='xl:text-[60px] md:text-[50px] text-[32px] tracking-[0.5px] font-bold xl:w-[65%] md:w-[95%] w-full mx-auto'>Giving is the only true acquisition</h1>
                  <p className='text-lg leading-9 xl:w-[35%] md:w-[95%] w-full mx-auto'>A social fundraising platform optimized for your charity in easy steps. Join us today in giving back to improve the quality of learning in our schools, and support the academic needs of less-privileged students.</p>
              </div>
              <div className='flex gap-x-[26px] items-center w-fit mx-auto'>
                  <Links route='/' text='Sponsor Now' />
                  <Link href={``} className='flex gap-x-2 bg-[#F0EDED] border border-[#F0EDED] rounded-[15px] py-3 px-[15px]'>
                      <Image src={play} alt='play button' />
                      Watch Video
                  </Link>
              </div>
          </div>

          <div className='flex items-end text-white xl:gap-x-6 md:gap-x-4 gap-x-2 md:mt-0 mt-10 w-full'>
              
              {/* First  */}
              <div className='flex justify-between flex-col md:w-[25%] w-[33.3%] xl:gap-y-6 md:gap-y-4 gap-y-2 h-full'>    
                  <div className='bg-[#138294] flex flex-col xl:pt-[90px] md:pt-[50px] pt-8 xl:px-6 md:px-3 px-2 xl:pb-10 md:pb-[22px] pb-[14px] xl:rounded-[20px] md:rounded-[11.1px] rounded-[6.94px] xl:gap-y-10 md:gap-y-5 gap-y-3'>
                    <p className='xl:text-[65px] md:text-4xl text-[22px] tracking-[0.5px] font-bold'>65%</p>
                    <p className='xl:w-[80%] md:w-[90%] w-20 xl:text-sm md:text-[7.7px] text-[5px]'>17,000 people died, thousands injured, houses and buildings destroyed. Lagos-ibadan grieves.</p>
                    <Link href={``} className='flex items-center justify-between bg-white/20 rounded-[30px] gap-x-2 p pl-5 leading-5 font-medium xl:text-sm md:text-[7.7px] text-[5px] xl:mt-10 md:mt-8 mt-5'>
                        <span className=''>Donate Now</span>
                        <Image src={download} alt='download' className='object-contain xl:w-[60px] xl:h-[60px] md:w-[33.3px] md:h-[33.3px] w-[20.2px] h-[20.2px]'/>
                    </Link>
                  </div>

                  <div className='bg-[#222222] xl:rounded-[20px] md:rounded-[11.1px] rounded-[6.94px] flex justify-center items-center xl:py-9 md:py-7 py-4 xl:gap-x-12 md:gap-x-6 gap-x-4'>
                      <Image src={smiley} alt='smiley face' className='xl:w-[64px] xl:h-[64px] md:w-[35.5px] md:h-[35.5px] w-[22.2px] h-[22.2px] object-contain'/>
                      <p className='xl:text-2xl md:text-sm text-[8px] xl:w-[40%] md:w-[45%] w-[40%]'>Let them be heard</p>
                  </div>
              </div>
            
              {/* Second  */}
            <div className='flex md:flex-row flex-col items-center xl:gap-x-6 md:gap-x-4 gap-y-2 xl:text-2xl md:text-[13.33px] text-[8.33px] font-semibold md:w-[50%] w-[33.3%] md:self-end'>
                  <div className='md:w-[50%] w-full relative'>
                       <Image src={heroII} alt='hero images' className='w-full h-full object-center object-contain' />
                      <div className='bg-black/50 w-full h-full absolute top-0 bottom-0 xl:rounded-[20px] md:rounded-[11.1px] rounded-[6.94px]'>
                      <p className='absolute md:bottom-5 bottom-4 md:left-4 left-3 xl:w-[90%] w-[85%]'>Natural disasters in urban & rural areas.</p> 
                      </div>    
                  </div>    
                  
                  <div className='md:w-[50%] w-full relative'>
                       <Image src={heroI} alt='hero images' className='w-full h-full object-center object-contain' />
                      <div className='bg-black/50 w-full h-full absolute top-0 bottom-0 xl:rounded-[20px] md:rounded-[11.1px] rounded-[6.94px]'>
                      <p className='absolute md:bottom-5 bottom-4 md:left-4 left-3 xl:w-[95%] w-[90%]'>Sponsor food, water, to orphans in Nigeria</p> 
                      </div>
                    
                  </div>  
            </div>

              {/* Third  */}
              <div className='flex flex-col items-center xl:gap-y-6 md:gap-y-4 gap-y-2 md:w-[25%] w-[33.33%] h-full'>
                  <div className='xl:rounded-[20px] md:rounded-[11.1px] rounded-[6.94px] flex flex-col relative w-full h-full'>
                      <Image src={heroIV} alt='background' className='w-full h-full object-center object-contain'/>
                      <div className='absolute top-0 left-0 w-full h-full xl:pt-[67px] xl:pb-[80px] mx-auto flex flex-col items-stretch'>
                          <Image src={hand} alt='hands' />
                      <Link href={``} className='flex items-center justify-between bg-white/20 rounded-[30px] gap-x-2 p pl-5 leading-5 font-medium xl:text-sm md:text-[7.7px] text-[5px] mx-auto xl:w-[85%]'>
                        <span>Go to campaigns</span>
                        <Image src={downloadI} alt='download'className='object-contain xl:w-[60px] xl:h-[60px] md:w-[33.3px] md:h-[33.3px] w-[20.2px] h-[20.2px]'/>
                    </Link>
                      </div>
                      
                  </div>
                  
                  <div className='bg-[#392300] xl:rounded-[20px] md:rounded-[11.1px] rounded-[6.94px] w-full flex justify-center items-center text-[#F09223] xl:gap-x-12 md:gap-x-6 gap-x-4 xl:py-9 md:py-7 py-4'>
                      <Image src={loveHand} alt='love in a hand' className='xl:w-[64px] xl:h-[64px] md:w-[35.5px] md:h-[35.5px] w-[22.2px] h-[22.2px] object-contain'/>
                      <p className='xl:text-2xl md:text-sm text-[8px] xl:w-[40%] md:w-[45%] w-[40%]'>Let them be heard</p>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Hero