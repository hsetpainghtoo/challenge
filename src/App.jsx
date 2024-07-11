import React from "react";
import Header from "./compents/Header";
import WebContainer from "./compents/WebContainer";
import NewBox from "./compents/NewBox";
import HardwareNews from "./compents/HardwareNews";

const App = () => {
  return (
    <>
      <div
        color="Soft orange: hsl(35, 77%, 62%)"
        className="grid max-w-[1440px] min-h-[1000px] w-[90%] mx-auto border-gray-400"
      >
        <Header />
        <div className="xl:flex lg:block md:block sm:block max-sm:block">
          <div className="xl:w-[69%] lg:w-[100%] md:w-[100%] sm:w-[100%] max-sm:w-[100%]">
            <WebContainer />
          </div>

          <div className="xl:ml-10 lg:ml-0 md:ml-0 sm:ml-0 max-sm:ml-0 bg-black lg:mb-10 max-lg:my-14 max-xl:my-14 xl:w-[31%] lg:w-[100%] md:w-[100%] sm:w-[100%] max-sm:w-[100%]">
            <NewBox />
          </div>
        </div>

        <div className="mt-auto">
          <HardwareNews />
        </div>
      </div>
    </>
  );
};

export default App;
