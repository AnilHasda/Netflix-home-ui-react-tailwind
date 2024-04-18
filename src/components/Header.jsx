import React from 'react'

const Header = () => {
  return (
    <nav className="h-[100px] w-full relative flex items-center justify-between px-[20px] md:px-[40px] lg:px-[150px] z-10 pt-2">
{/* logo section */}
<div className='h-full w-auto  overflow-hidden'><img src="./images/logo.png"alt="logo"className='w-[150px] md:w-[200px]'/></div>
<button className='px-4 py-1.5 mb-7 md:mb-[4] bg-[#E50914] hover:bg-[#C11119] duration-300 rounded-md text-white font-bold text-sm'>Sign In</button>
    </nav>
  )
}

export default Header