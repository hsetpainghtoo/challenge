import React from "react";

const WebContainer = () => {
  return (
    <>
      <div >
      <img
          src="assets\images\image-web-3-desktop.jpg"          
          alt=""
          className="mb-8 max-sm:hidden"
        />
      <img
          src="assets\images\image-web-3-mobile.jpg"
          alt=""
          className="mb-5 sm:!hidden"
        />
        

        <div className="grid grid-col-1 xl:grid-cols-2">
          <div className="col-span-1">
            <p className="text-[2rem] md:text-[2.5rem] lg:text-6xl xl:text-7xl  font-extrabold">
              The Bright Future of Web 3.0
            </p>
          </div>

          <div className="col-span-1 xl:w-[345px] ml-auto">
            <p className="text-[17px] leading-8">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-red-500 py-4 px-6 text-white text-sm tracking-[4px] font-semibold mt-5  rounded-md active:scale-95">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebContainer;
