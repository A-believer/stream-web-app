import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import download from "../../public/icons/arrow-right.svg"
import Link from 'next/link'
import logo from "../../public/images/logo-footer.png"

function Footer() {
  return (
    <footer className='bg-[#138294] text-white xl:pt-[66px] md:pt-14 py-10 xl:pb-[25px] md:pb-24 xl:pl-9 md:pl-9 px-6 xl:pr-[86px] md:pr-9  lg:mx-[45px] md:mx-10 mx-[18px] xl:mb-[69px] md:mb-12 mb-8 rounded-[20px] text-lg leading-[34px] mt-[100px]'>
      <div className='flex lg:flex-row flex-col justify-between gap-y-[100px]'>
        <div>
          <Image src={logo} alt='logo' className='lg:w-[309px] w-[165px] lg:h-[130px] h-[69px] object-contain'/>
          <p>Great futures built with small charity</p>
        </div>

        <div className='flex flex-wrap md:flex-row flex-col xl:gap-x-24 lg:gap-x-16 md:gap-x-40 gap-y-[100px]'>
          <ul className='space-y-7'>
            <li className='text-2xl font-semibold'><Link href={``}>Home</Link></li>
            <li><Link href={``}>How it works</Link></li>
            <li><Link href={``}>About Us</Link></li>
          </ul>

          <ul className='space-y-7'>
            <li className='text-2xl font-semibold'><Link href={``}>Contact</Link></li>
            <li><Link href={``}>+234 856 7004 5345</Link></li>
            <li><Link href={``}>Streams@gmail.com</Link></li>
          </ul>

          <ul className='space-y-7'>
            <li className='text-2xl font-semibold'><Link href={``}>Socials</Link></li>
            <li><Link href={``}>Twitter</Link></li>
            <li><Link href={``}>Instagram</Link></li>
            <li><Link href={``}>LinkedIn</Link></li>
          </ul>
        </div>
       
      </div>

      <hr className='mt-[55px] mb-[33px] bg-[#11CBE96E]/40' />
      
      <div className='flex md:flex-row flex-col justify-between md:items-center gap-y-14'>
        <p className='text-base md:text-lg leading-[34px]'>2023 copyright. Streams Foundation.</p>
        <Link href={``} className='flex items-center bg-white/20 rounded-[30px] gap-x-2 p pl-[35px] text-sm leading-5 font-medium w-fit'>
          <span>Download our app</span>
          <Image width={60} height={60} src={download} alt='download' className='object-contain'/>
        </Link>
      </div>
    </footer>
  )
}

export default Footer