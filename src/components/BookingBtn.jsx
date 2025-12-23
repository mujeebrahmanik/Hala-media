import React from 'react'
import { PopupButton } from "react-calendly";

const BookingBtn = () => {
     
  return (
    <>
        <PopupButton
            url="https://calendly.com/mujeebrahmanikamaal/30min"
            rootElement={document.getElementById("root")}
            text="Book a Strategy Call"
            className="bg-gradient-to-r from-[#791BBA] to-blue-500 rounded-md py-2 px-4 text-white font-medium cursor-pointer"
        />
    </>
  )
}

export default BookingBtn