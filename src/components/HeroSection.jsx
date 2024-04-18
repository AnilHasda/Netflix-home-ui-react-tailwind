import React from "react";
import Header from "./Header";
import { PiCaretRightBold } from "react-icons/pi";
const HeroSection = () => {
  return (
    <div className="md:h-[100vh] w-full bg-[url('./images/banner.jpg')] bg-center relative text-white border-b-8 border-[#252525]">
      <div className="h-full w-full bg-[black] opacity-60 absolute top-0 left-0 z-[0]">
        {/* All content will come here */}
      </div>
      <Header />
      {/* hero intro section starts here */}
      <div className="relative z-10 pb-4 text-center  w-auto  mt-[9%] lg:mt-[10%]  mb-[5%] px-4">
        <h1 className="text-[30px] md:text-[40px] lg:text-[48px] font-bold">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-[22px] lg:text-[24px] pt-5">
          Watch anywhere. Cancel anytime.
          </h2>
          <h3 className="text-[18px] md:text-[20px] pt-5">
            Ready to watch? Enter your email to create or restart your
            membership
          </h3>
        <form className="h-auto w-auto flex flex-col md:flex-row justify-center items-center gap-5 md:gap-3 mt-5">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="text-wite outline-none border-[1px] border-[gray] bg-[rgba(0,0,0,.3)] focus:border-red-600 h-14 w-[90%] md:w-[400px] rounded-md pl-4"
          />
          <button type="submit"value="submit"className="h-14 w-[90%] md:w-[200px] bg-[#E50914] hover:bg-[#C11119] duration-300 text-[20px] md:text-[24px] rounded-md font-bold flex items-center justify-center">Get Started<PiCaretRightBold size="30px" className="ml-3"/></button>
          </form>
      </div>
    </div>
  );
};

export default HeroSection;
