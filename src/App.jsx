import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import BookNow from './components/BookNow'
import Footer from './components/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <Services/>
        <Testimonial/>
        <BookNow/>
        <Footer/>

        <FloatingWhatsApp
          phoneNumber="+971543268233"
          accountName="Hala Media"
          chatMessage="Hi! How can we help you?"
          allowClickAway
          className='text-black'
        />
      </div>
    </>
  )
}

export default App
