import React from "react";

const HardwareNews = () => {
  return (
    <>
      <div className="flex gap-14 pb-6 max-md:block">
        {/* <div className='flex gap-5'>
          <img src="src\assets\images\image-retro-pcs.jpg" alt="" className='h-36 w-auto'  />
          <div className='flex flex-col justify-evenly'>
            <p className='font-bold text-4xl text-red-600'>01</p>
            <a href="#" className='font-extrabold text-[19px] hover:text-red-600 focus:text-red-400'>Reviving Retro PCs</a>
            <p className='w-60 leading-7'>What happens when olds PCs <br/> are given modern upgrades?</p>
          </div>
        </div> */}

        <div className="flex gap-5">
          <img
            src="assets\images\image-retro-pcs.jpg"
            alt=""
            className="h-36 w-auto"
          />
          <div className="flex flex-col justify-evenly">
            <p className="font-bold text-3xl lg:text-2xl md:text-xl sm:text-md text-red-600">01</p>
            <a
              href="#"
              className="font-extrabold text-xl lg:text-sm md:text-xs hover:text-red-600 focus:text-red-400"
            >
              Reviving Retro PCs
            </a>
            <p className="leading-7 text-sm lg:text-xs md:text-[0.7rem] md:leading-tight sm:leading-none">
            What happens when olds PCs are given modern upgrades?
            </p>
          </div>
        </div>

        <div className="flex gap-5 max-md:my-7 max-sm:my-7">
          <img
            src="assets\images\image-top-laptops.jpg"
            alt=""
            className="h-36 w-auto"
          />
          <div className="flex flex-col justify-evenly">
            <p className="font-bold text-3xl lg:text-2xl md:text-xl sm:text-md text-red-600">02</p>
            <a
              href="#"
              className="font-extrabold text-xl lg:text-sm md:text-xs hover:text-red-600 focus:text-red-400"
            >
              Top 10 Laptops of 2022
            </a>
            <p className="leading-7 text-sm lg:text-xs md:text-[0.7rem] md:leading-tight sm:leading-none">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <img
            src="assets\images\image-gaming-growth.jpg"
            alt=""
            className="h-36 w-auto"
          />
          <div className="flex flex-col justify-evenly">
            <p className="font-bold text-3xl lg:text-2xl md:text-xl sm:text-md text-red-600">03</p>
            <a
              href="#"
              className="font-extrabold text-xl lg:text-sm md:text-xs hover:text-red-600 focus:text-red-400"
            >
              The Growth of Gaming
            </a>
            <p className="leading-7 text-sm lg:text-xs md:text-[0.7rem] md:leading-tight sm:leading-none">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HardwareNews;
