import React from 'react'
import HeroSection from './components/HeroSection'
import TvSection from './components/TvSection'
import MobileSection from './components/MobileSection'
import FourthSection from './components/FourthSection'
import KidsSection from './components/KidsSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='h-auto max-w-[1440px] m-auto'>
<HeroSection/>
     {/* header section ends here */}
     {/* Tvsection starts from here */}
     <TvSection/>
    {/* TVsection ends here */}
    {/* Mobile section starts from here */}
<MobileSection/>
    {/*Mobile END */}
    {/* Fourth section starts from here */}
<FourthSection/>
    {/* Fourth section ends here */}
    {/* Kids section starts from here */}
    <KidsSection/>
    {/* Kids section ends here */}
    {/* FAQ section starts from here */}
    <FAQ/>
        {/* FAQ section ends here */}
        {/* Footer section starts from here */}
        <Footer/>
        {/* Footer section ends here */}
    </div>
  )
}

export default App