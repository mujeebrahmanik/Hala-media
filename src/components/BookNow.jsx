import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const BookNow = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    mobile: "",
    description: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("sf-form").submit();

    alert("Lead submitted successfully!");
    setFormData({ first_name: "", email: "", mobile: "", description: "" });
  };

  return (
    <div className="relative flex flex-col mt-10 border-b border-neutral-900 rounded-lg py-10 px-5 justify-center items-center" id="contact">
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#6D28D9]/80 to-[#020203]/80 backdrop-blur-xl -z-10"></div>

      <div className="text-center relative z-10 w-full max-w-6xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-8 tracking-wide font-medium text-white">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
          {/* Left Info */}
          <div className="flex flex-col gap-6 text-start">
            <p className="text-md font-medium px-3 text-white">
              Let’s turn your ideas into impact. Book your free discovery call and see why ambitious brands choose to grow with us.
            </p>

            <ul className="space-y-4 text-white">
              <li className="flex gap-3 items-center">
                <div className="flex h-10 w-10 p-2 bg-neutral-800 justify-center items-center rounded-full">
                  <Phone size={16} />
                </div>
                <h5 className="font-medium text-md">+971 4 552 8454</h5>
              </li>

              <li className="flex gap-3 items-center">
                <div className="flex h-10 w-10 p-2 bg-neutral-800 justify-center items-center rounded-full">
                  <Mail size={16} />
                </div>
                <h5 className="font-medium text-md">info@halamedia.ae</h5>
              </li>

              <li className="flex gap-3 items-start">
                <div className="flex h-10 w-10 p-2 bg-neutral-800 justify-center items-center rounded-full">
                  <MapPin size={16} />
                </div>
                <div className="ml-0">
                  <p className="font-medium text-md">Workspace Downtown</p>
                  <p className="text-white">Next to Dubai Mall / Burj Khalifa Metro Station</p>
                  <p className="text-white">Dubai, United Arab Emirates</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="px-3">
            <form
              id="sf-form"
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
              method="POST"
              target="hidden_iframe"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              {/* Required hidden fields */}
              <input type="hidden" name="oid" value="00Da3000005DkLV" />
              <input type="hidden" name="last_name" value={formData.first_name || "N/A"} />
              <input type="hidden" name="company" value="Individual" />
              <input type="hidden" name="retURL" value="https://hala-media.onrender.com/thank-you" />

              {/* Visible Fields */}
              <div className="flex gap-2">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Your Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border-white border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#791BBA]"
                  required
                />
                <input
                  type="number"
                  name="mobile"
                  placeholder="Your Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border-white border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#791BBA]"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border-white border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#791BBA]"
                required
              />

              <textarea
                name="description"
                placeholder="Your Message"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 rounded-lg border-white border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#791BBA]"
                required
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#791BBA] to-[#4C1D95] hover:from-[#4C1D95] hover:to-[#791BBA] text-white font-semibold py-3 rounded-xl transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
