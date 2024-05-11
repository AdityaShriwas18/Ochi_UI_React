import React from 'react';

function Cards() {
  return (
    <div className='outerContainer w-full min-h-screen bg-[#F1F1F1] flex flex-col md:flex-row items-center px-[5vw] gap-5'>
      <div className="cardcontainer h-[50vh] w-full md:w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute px-[1vw] py-[1vh] rounded-full border-2 text-[#F1F1F1] left-10 bottom-5'>&copy; 2019-2022</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 cardcontainer h-[50vh] w-full md:w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#212121]">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute px-[1vw] py-[1vh] tracking-tighter leading-none rounded-full border-2 text-[#F1F1F1] left-5 bottom-5 uppercase'>Rating 5.0 on clutch</button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#212121]">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute px-[1vw] py-[1vh] tracking-tighter leading-none rounded-full border-2 text-[#F1F1F1] left-5 bottom-5 uppercase'>Business Bootcamp Alumni</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
