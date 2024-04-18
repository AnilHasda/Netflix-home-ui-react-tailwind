import React from "react";

const TvSection = () => {
  return (
    <div className="min-h-[500px] py-[50px] lg:py-[0px] w-full bg-black grid place-items-center text-white border-b-8 border-[#252525]">
      <div className="h-auto md:w-[80%] grid grid-cols-1 md:gap-5 lg:grid-cols-2">
        <div className="h-auto grid place-content-center text-center md:text-start px-5">
          <h1 className="text-[35px] md:text-[48px] font-bold pb-3">
            Enjoy on your TV
          </h1>
          <h3 className="sm:text-[20px] md:text-[24px] leading-[30px]">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h3>
        </div>
        <div className="h-full relative">
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            autoPlay
            muted
            loop
            className="absolute w-[71%] left-[14%] top-[22%] z-[1] "
          ></video>
          <img
            src="./images/tv.png"
            alt="tv-image"
            className="w-[100%] relative z-[2]"
          />
        </div>
      </div>
    </div>
  );
};

export default TvSection;
