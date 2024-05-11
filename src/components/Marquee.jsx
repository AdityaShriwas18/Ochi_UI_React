import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 text-white rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[15vw] leading-none font-["Founders Grotesk X-Condensed"] font-semibold uppercase pr-20 mt-2 mb-2 tracking-tighter'>We are ochi</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[15vw] leading-none font-["Founders Grotesk X-Condensed"] font-semibold uppercase pr-20 mt-2 mb-2 tracking-tighter'>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee