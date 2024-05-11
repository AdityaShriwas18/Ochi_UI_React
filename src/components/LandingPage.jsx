import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='h-screen w-full pt-2'>
      <div className="textstructure mt-32 px-[7vw]">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return <div className="masker">
            <div className="w-fit flex">
              {index === 1 && (
                <motion.div initial={{ width: 0 }} animate={{ width: "10vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className=' mr-[1vw] w-[10vw] rounded-md h-[6.3vw] relative top-[2.8vw] bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)]'></motion.div>)}
              <h1 className='uppercase text-[9vw] pt-[2vw] -mb-[1vw] leading-[.75] tracking-tighter font-Font1 font-medium'>{item}</h1>
            </div>
          </div>
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center py-5 px-16">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
          return <p className='text-md tracking-tight leading-none'>{item}</p>
        })}
        <div className="start flex items-center gap-5">
          <div className='startdiv px-4 py-2 border-[1px] border-zinc-700 text-sm uppercase rounded-full cursor-pointer'>START THE PROJECT</div>
          <div className='startdiv w-8 h-8 border-[1px] border-zinc-700 rounded-full flex items-center justify-center cursor-pointer'><span className='rotate-45'><FaArrowUpLong /></span></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;