import React from "react";

const Footer = () => {
  let data = [
    {
      item1: "FAQ",
      item2: "Investor Relations",
      item3: "Privacy",
      item4: "Speed Test",
    },
    {
        item1: "Help Center",
        item2: "Jobs",
        item3: "Cookie Preferences",
        item4: "Legal Notices",
      },
      {
        item1: "Account",
        item2: "Ways to Watch",
        item3: "Corporate Information",
        item4: "Only on Netflix",
      },
      {
        item1: "Media Center",
        item2: "Terms of Use",
        item3: "Contact Us",
      },
  ];
  return (
    <footer className="h-auto w-full bg-black text-[#aba9a9] py-[70px]">
        <h1 className="text-lg pl-[10%] pb-5 underline cursor-pointer">Questions? Contact us.</h1>
        <div className="w-[90%] lg:w-[70%] ml-[10%] px-[10px] gap-10 md:grid md:grid-cols-2  md:px-0 flex flex-col justify-between flex-wrap lg:flex lg:flex-row">
            {data.map((ele,index)=>{
                return  <span key={index} className=" font-[400] underline w-auto" >
                <ul className="w-auto flex flex-col gap-4 ">
                  <li><a href="#" className="cursor-pointer ">{ele.item1}</a></li>
                  <li><a href="#" className="cursor-pointer ">{ele.item2}</a></li>
                  <li><a href="#" className="cursor-pointer ">{ele.item3}</a></li>
                  <li><a href="#" className="cursor-pointer ">{ele.item4}</a></li>
                </ul>
              </span>
            })}
      </div>
      <div className="h-[40px] w-[130px] ml-[10%] mt-5 border border-[gray] rounded-sm grid place-items-center">
        <select className="bg-[transparent] border-none outline-none text-[18px] text-white">
            <option>
                English
                </option>
        </select>
      </div>
      <p className="pl-[10%] pt-5">Netflix Nepal</p>
    </footer>
  );
};

export default Footer;
