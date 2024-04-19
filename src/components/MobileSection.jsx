import React from "react";

const MobileSection = () => {
  return (
    <div className="min-h-[500px] py-[50px] lg:py-[0px] w-full bg-black grid place-items-center text-white border-b-8 border-[#252525]">
      <div className="h-auto lg:w-[80%]  grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="relative h-auto w-auto order-2 lg:order-1 lg:mt-0  grid place-items-center overflow-hidden">
          <img
            src="./images/mobile.jpg"
            alt="mobile-image"
            className="w-[95%] object-cover "
          />
          <div className="absolute h-[80px] sm:h-[100px] w-[80%] sm:w-[50%] top-[65%] bg-black border border-[gray] rounded-xl  flex items-center py-1 pl-3">
            <div className="h-[90%] w-[40%] bg-[url('./images/stranger.png')] bg-contain bg-no-repeat"></div>
           <div className=" sm:mr-3 flex gap-8  sm:gap-8 items-center">
            <div className="h-full flex-1 w-[170px] sm:w-[150px]  sm:text-[14px]">
              <h2 className=" font-semibold">Stranger Things</h2>
              <p className="text-[#005FAE]">Downloading...</p>
            </div>
            <div>
              <img
                src="./images/download-icon.gif"
                alt="downloading-image"
                className="w-[100%]"
              />
            </div>
            </div>
          </div>
        </div>
        <div className=" grid place-content-center  text-center lg:text-start px-5 md:px-10 lg:order-2 lg:max-w-[600px]">
          <h1 className="font-bold text-[35px] md:text-[48px] leading-[60px]">
            Download your shows to watch offline
          </h1>
          <h3 className="text-[20px] md:text-[24px] pt-4 leading-[30px]">
            Save your favorites easily and always have something to watch.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
