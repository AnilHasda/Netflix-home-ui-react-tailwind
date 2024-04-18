import React from "react";

const MobileSection = () => {
  return (
    <div className="min-h-[500px] py-[50px] lg:py-[0px] w-full bg-black grid place-items-center text-white border-b-8 border-[#252525]">
      <div className="h-auto lg:w-[80%]  grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="h-auto w-auto order-2 lg:order-1 lg:mt-0  grid place-items-center overflow-hidden">
            <img src="./images/mobile.jpg"alt="mobile-image"className="w-[90%] object-cover "/>
        </div>
        <div className=" grid place-content-center  text-center lg:text-start px-5 md:px-10 lg:order-2 lg:max-w-[600px]">
            <h1 className="font-bold text-[35px] md:text-[48px] leading-[60px]">Download your shows to watch offline</h1>
            <h3 className="text-[20px] md:text-[24px] pt-4 leading-[30px]">Save your favorites easily and always have something to watch.</h3>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
