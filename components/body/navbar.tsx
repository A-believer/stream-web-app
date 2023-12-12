"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../../public/images/logo.png"
import mobileClose from "../../public/icons/mobile-close.svg"
import mobileOpen from "../../public/icons/mobile-open.svg"
import tabOpen from "../../public/icons/tab-open.svg"
import tabClose from "../../public/icons/tab-close.svg"
import tabCloseDark from "../../public/icons/tab-close-dark.svg"
import mobileCloseDark from "../../public/icons/mobileClose-dark.svg"
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Links from "./link"

function Navbar() {
  const [menuModal, setMenuModal] = useState<boolean>(false)
  const { theme } = useTheme()
  const params = usePathname()
  return (
    <header className='border-b border-[#828282]/30 flex justify-between items-center xl:pl-[50px] xl:pr-20 xl:py-0 md:px-12 md:py-11 px-6 py-6 font-ppn'>
      <Link href={`/`} className='md:w-[201.25px] w-[128.576px] h-auto '>
        <Image src={logo} alt='logo' priority className="w-full h-full object-contain"/>
      </Link>  
          
      <nav className='flex items-center h-full'>
        <ul
          className='xl:flex hidden items-center gap-x-[15px] text-lg leading-[34px] font-medium h-full'>
          <li className={`${params === "/" ? "text-[#138294] border-b-4 border-[#138294]" : "text-foreground border-b-8 border-transparent"} py-8 px-2 h-full`}>
            <Link href={`/`}>Home</Link>
          </li>
          <li className={`${params === "/about-us" ? "text-[#138294] border-b-4 border-[#138294]" : "text-foreground border-b-8 border-transparent"} py-8 px-2 h-full`}>
            <Link href={`/about-us`}>About Us</Link>
          </li>
          <li className={`${params === "/how-it-works" ? "text-[#138294] border-b-4 border-[#138294]" : "text-foreground border-b-8 border-transparent"} py-8 px-2 h-full`}>
            <Link href={`/how-it-works`}>How It Works</Link>
          </li>
          <li>
           <Link href={``} className="border rounded-[15px] border-foreground p-2.5">Become a Helper</Link>
          </li>
          <li>
            <Links text={`Become a Helpee`} route={`/become-a-helpee`}/>
          </li>
          <li className='w-[2px] h-[40px] bg-[#B1B1B1]'></li>
          <li>Sign In</li>
        </ul>
        
        {theme === "light" &&
          <Image
            className={`${theme === "light" ? "xl:hidden sm:flex hidden ": "hidden"} w-10 h-[60px] object-contain`}
            src={menuModal ? tabClose : tabOpen} alt='tab modal'
            onClick={() => setMenuModal(prev => !prev)} />}
          
        {theme === "dark" && <Image
          className={`${theme === "dark" ? "xl:hidden sm:flex hidden" : "hidden"} w-10 h-[60px] object-contain`}
          src={menuModal ? tabClose : tabCloseDark} alt='tab modal'
          onClick={() => setMenuModal(prev => !prev)} />}
        
        
        {theme === "light" &&
          <Image
            className={`${theme === "light" ? "sm:hidden flex" : "hidden"}`}
            src={menuModal ? mobileClose : mobileOpen} alt='mobile modal'
            onClick={() => setMenuModal(prev => !prev)} />}
        
        {theme === "dark" && <Image
          className={`${theme === "dark" ? 'sm:hidden flex' : "hidden"}`}
          src={menuModal ? mobileClose : mobileCloseDark} alt='mobile modal'
          onClick={() => setMenuModal(prev => !prev)} />
        }

      {menuModal && 
          <ul
              className='z-[99] xl:hidden block absolute left-0 md:top-40 top-28 w-full h-full bg-background md:text-[40px] text-[24px] leading-[34px]'>
          <li className={`${params === "/" ? "text-[#138294] bg-[#D9D9D9]/40" : " text-foreground bg-transparent"} md:py-9 py-5 md:pl-12 pl-6`}>
            <Link href={`/`}>Home</Link>
          </li>
          <li className={`${params === "/about-us" ? "text-[#138294] bg-[#D9D9D9]/40 " : "text-foreground bg-transparent"} md:py-9 py-5 md:pl-12 pl-6`}>
            <Link href={`/users`}>Users</Link>
          </li>
          <li className={`${params === "/how-it-works" ? "text-[#138294] bg-[#D9D9D9]/40" : "text-foreground bg-transparent"} md:py-9 py-5 md:pl-12 pl-6`}>
            <Link href={`/how-it-works`}>How It Works</Link>
            </li>
            <li className={`${params === "/financials" ? "text-[#138294] bg-[#D9D9D9]/40" : "text-foreground bg-transparent"} md:py-9 py-5 md:pl-12 pl-6`}>
            <Link href={`/financials`}>Financials</Link>
          </li>
          <li className={`${params === "/sign-in" ? "text-[#138294] bg-[#D9D9D9]/40" : "text-foreground bg-transparent"} md:py-9 py-5 md:pl-12 pl-6`}><Link href={`/sign-in`}>Sign In</Link></li>
          <li className="md:my-14 my-8 md:mx-12 mx-5"><hr /></li>
          <li className="md:mt-20 my-14 md:ml-12 ml-5">
           <Link href={`/become-a-helper`} className="border-[1.56px] md:rounded-[23.4px] rounded-[15px] border-foreground px-6 py-4 border-[#000] md:text-[28px] md:leading-[52x]">Become a Helper</Link>
          </li>
          <li className="md:mt-16 mt-20 md:ml-12 ml-5">
           <Link href={`/become-a-helpee`} className="bg-[#138294] text-white md:rounded-[23.4px] rounded-[15px] px-6 py-4 border-[#000] md:text-[28px] md:leading-[52x]">Become a Helpee</Link>
          </li>
         
        </ul>}
      </nav>
    </header>
  )
}

export default Navbar