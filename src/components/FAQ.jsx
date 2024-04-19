import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { PiCaretRightBold } from "react-icons/pi";
import data from "./data";
const FAQ = () => {
  let [response, setResponse] = useState(data?data:[]);
  useEffect(()=>{
    setResponse(data)
  },[])
  function updateStatus(id){
let result=response.map((ele,index)=>{
  if(id===index){
    ele={...ele,status:!ele.status};
    return ele;
  }
  else{
    if(ele.status===true){
      ele={...ele,status:!ele.status}
      return ele;
    }
    else{
      return ele;
    }
  }
})
setResponse(result)
      }
  return (
    <div className="h-auto w-full bg-black text-white text-center grid place-items-center py-[70px] border-b-8 border-[#252525]">
      <div className="w-full">
        <h1 className="text-[35px] px-[10px] lg:px-0 md:text-[48px] font-bold pb-8 leading-[50px]">
          Frequently Asked Questions
        </h1>
        <div className="h-auto w-[90%] lg:w-[70%] m-auto text-[20px] md:text-[24px] font-[400]">
          {response.map((ele, index) => {
            return (
              <div className="mb-4" key={index}>
                <div
                  className="w-[full]  min-h-[60px] md:h-[80px] bg-[#343434] text-start hover:bg-[#464545] duration-300 flex justify-between items-center px-[20px] cursor-pointer"
                  onClick={() => {
                    updateStatus(index)
                  }}
                >
                  <h3>{ele.qns}</h3>
                  <FaPlus className={`${ele.status===true?"rotate-45":"rotate-0"} duration-300`}/>
                </div>
                <div
                  className={`${
                    ele.status === true ? "h-auto" : "h-0"
                  } duration-500 w-full bg-[#343434] px-[20px] ${ele.status===true?"py-[10px]":"py-0"}  text-start mt-1 overflow-hidden`}
                >
                  {ele.ans}
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="text-[20px] font-[400] pt-7 px-10 md:px-0">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <form className="h-auto w-auto flex flex-col md:flex-row justify-center items-center gap-5 md:gap-3 mt-5">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="text-wite outline-none border-[1px] border-[gray] bg-[rgba(0,0,0,.3)] focus:border-red-600 h-14 w-[90%] md:w-[400px] rounded-md pl-4"
          />
          <button
            type="submit"
            value="submit"
            className="h-14 w-[90%] md:w-[200px] bg-[#E50914] hover:bg-[#C11119] duration-300 text-[20px] md:text-[24px] rounded-md font-bold flex items-center justify-center"
          >
            Get Started
            <PiCaretRightBold size="30px" className="ml-3" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQ;
