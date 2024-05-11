import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { FaAlignLeft, FaAlignRight } from 'react-icons/fa6';
import { SiPanasonic } from 'react-icons/si'

function Featured() {

    const cards = [useAnimation(), useAnimation()];

    const hoverhandler = (index) => {
        cards[index].start({ y: "0" })
    }
    const hoverhandlerEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div className='w-full py-[5vh]'>
            <div className="w-full px-[5vw] pb-10 border-b-[1px] border-zinc-400">
                <h1 className='text-5xl font-["Neue_Montreal"]'>Featured Projects</h1>
            </div>
            <div className="cards outerContainer w-full md:flex sm:flex md:gap-10 mt-10 px-[5vw]">
                <motion.div
                    onHoverStart={() => hoverhandler(0)}
                    onHoverEnd={() => hoverhandlerEnd(0)}
                    className='cardcontainer relative rounded-lg w-1/2 h-[75vh]' >
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl' >
                        {"FYDE".split('').map((item, index) =>
                            <motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                className='inline-block'>{item}</motion.span>)}</h1>
                    <div className="overflow-hidden md:w-full h-full rounded-xl">
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                    </div>
                </motion.div>
                <motion.div
                    onHoverStart={() => hoverhandler(1)}
                    onHoverEnd={() => hoverhandlerEnd(1)}
                    className='cardcontainer relative rounded-lg w-1/2 h-[75vh]' >
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl' >
                        {"VISE".split('').map((item, index) =>
                            <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                className='inline-block'>{item}</motion.span>)}</h1>
                    <div className="overflow-hidden md:w-full h-full rounded-xl">
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Featured