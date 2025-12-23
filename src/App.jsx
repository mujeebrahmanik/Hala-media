import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import BookNow from './components/BookNow'
import Footer from './components/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {

  useEffect(() => {
    const handleCalendly = (e) => {
      if (e.data?.event === "calendly.event_scheduled") {
        window.gtag?.('event', 'calendly_confirmed', {
          event_category: 'Booking',
          event_label: 'Calendly Success'
        });
      }
    };

    window.addEventListener("message", handleCalendly);
    return () => window.removeEventListener("message", handleCalendly);
  }, []);

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
