import React from "react";

const KidsSection = () => {
  return (
    <div className="min-h-[500px] py-[50px] lg:py-[0px] w-full bg-black grid place-items-center text-white border-b-8 border-[#252525]">
      <div className="h-auto md:w-[80%] grid grid-cols-1 gap-8 lg:gap-5 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <img
            src="./images/kids.png"
            alt="mobile-image"
            className="w-[100%] object-cover"
          />
        </div>
        <div className=" grid place-content-center  text-center md:text-start px-5 md:px-10 lg:order-2 lg:max-w-[600px]">
          <h1 className="font-bold text-[35px] md:text-[48px] leading-[60px]">
            Create profiles for kids
          </h1>
          <h3 className="text-[20px] md:text-[24px] pt-4 leading-[30px]">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default KidsSection;
