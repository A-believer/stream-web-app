"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import arrow from "../../public/icons/arrow-right-faq.svg"
import arrowDark from "../../public/icons/arrow-right-direction-dark.svg"
import { useTheme } from 'next-themes'
const faqData = [
  {
    id: 1,
    question: "Can i donate anonymously?",
    answer: "Lorem ipsum dolor sit amet consectetur. Quam diam vel et egestas lectus. Sit sed consectetur orci in sit aenean platea tincidunt."
  },
  {
    id: 2,
    question: "Can i donate food items or other services instead of money?",
    answer: "Lorem ipsum dolor sit amet consectetur. Quam diam vel et egestas lectus. Sit sed consectetur orci in sit aenean platea tincidunt."
  },
  {
    id: 3,
    question: "Can i donate food items or other services instead of money?",
    answer: "Lorem ipsum dolor sit amet consectetur. Quam diam vel et egestas lectus. Sit sed consectetur orci in sit aenean platea tincidunt."
  },
  {
    id: 4,
    question: "Can i donate food items or other services instead of money?",
    answer: "Lorem ipsum dolor sit amet consectetur. Quam diam vel et egestas lectus. Sit sed consectetur orci in sit aenean platea tincidunt."
  },
  {
    id: 5,
    question: "Can i donate food items or other services instead of money?",
    answer: "Lorem ipsum dolor sit amet consectetur. Quam diam vel et egestas lectus. Sit sed consectetur orci in sit aenean platea tincidunt."
  },
]

function Faqs() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
  const {theme} = useTheme()
  function handleQuestionOpen(id: number) {
   setOpenQuestion((prevIndex) => (prevIndex === id ? null : id))
    }
  
  return (
    <section className='rounded-[20px] xl:py-[120px] md:py-[80px] py-[60px] xl:px-[100px] md:px-8 px-4 xl:mx-14 md:mx-10 mx-5 bg-[#138294]/10 text-foreground font-ppn'>
      <div className='text-center space-y-5'>
        <h3 className='md:text-5xl text-2xl md:leading-[70px] leading-10 font-semibold'>Frequently asked Questions</h3>
        <p className='text-lg leading-9 font-medium tracking-[0.09px]'>Got another question? Email us at StreamsFoundation@gmail.com</p>
      </div>
      
      <div className='mt-20'>
        {faqData.map((faq) => (
          <div key={faq.id} className='py-6 border-b flex items-center justify-between gap-x-9'>
            <div>
              <p className='text-[#138294] md:text-2xl md:leading-[48px] text-lg leading-7 tracking-[0.12px] font-medium'>{faq.question}</p>
              {openQuestion === faq.id &&
                <p className='text-sm leading-7 xl:w-full md:w-[90%] w-full'>{faq.answer}</p>}
            </div>
            <Image src={theme === "light" ? arrow : arrowDark} alt="" onClick={() => handleQuestionOpen(faq.id)} className={`${openQuestion === faq.id ? "" : "rotate-90" } self-start`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faqs