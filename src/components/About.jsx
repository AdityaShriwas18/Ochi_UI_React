import React from 'react'

function About() {
    return (
        <div className='w-full py-[5vh] px-[5vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl' >
            <h1 className='about font-["Neue_Montreal"] text-[4vw] leading-[4.5vw]' >Ochi is a strategic partner for fast-grow­ing tech businesses that need to <a href="#">raise funds</a>, <a href="#">sell prod­ucts</a>, <a href="#">ex­plain com­plex ideas</a>, and <a href="#">hire great peo­ple</a>.</h1>
            <div className='w-full block md:flex gap-10 p-10 border-t-[1px] mt-20 border-[#8f9d5c]'>
                <div className="w-1/2">
                    <h1 className='text-5xl'>Our approach:</h1>
                    <button className='flex uppercase items-center gap-[2vw] px-[2vw] py-[2vh] mt-10 bg-zinc-900 rounded-full text-white'>Read More <div className='w-2 h-2 rounded-full bg-zinc-300'></div> </button>
                </div>
                <div className="w-3/2 md:h-[70vh] md:mt-1 mt-10 rounded-3xl bg-[#ddf192] overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About