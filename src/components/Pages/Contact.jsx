import React from "react";
import googleMaps from "../../assets/googleMaps.png";

function Contact() {
  return (
    <>
      <div className="banner-section relative contact-banner flex justify-center items-center">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase font-bricolage text-[#f5b754]">
            Get In Touch
          </h6>
          <h1 className="text-6xl font-bold font-bricolage text-white">
            <span className="text-[#f5b754]">Contact</span> Us
          </h1>
        </div>
      </div>

      <div className="contact-wrapper lg:px-[12%] px-[8%] bg-[#1b1b1b] pb-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 w-full gap-12">
          <div className="contact-item w-full group overflow-hidden relative bg-[#222222] cursor-pointer p-12 text-white rounded-x-xl">
            <i className="fa-solid fa-envelope text-[#f5b754] text-5xl group-hover:text-black transition-colors duration-300"></i>
            <h4 className="font-bricolage text-2xl x1:text-4xl font-semibold mt-8 mb-2">
              Email Us
            </h4>
            <p className="text-[#999] text-base xl:text-xl group-hover:text-black">
              fakeInfo@gmail.com
            </p>
            <i className="fa-solid fa-envelope contact-item-icon"></i>
          </div>
          <div
            className="contact-item w-full group overflow-hidden relative bg-[#222] cursor-pointer p-12 
text-white rounded-x-xl"
          >
            <i
              className="fa-solid fa-location-dot text-[#f5b754] text-5xl group-hover:text-black 
transition-colors duration-300"
            ></i>
            <h4 className="font-bricolage text-2xl x1:text-4xl font-semibold mt-8 mb-2">
              Our Address
            </h4>
            <p className="text-[#999] text-base xl:text-xl group-hover:text-black">
              Vadodara, Water Tower, Office 123
            </p>
            <i className="fa-solid fa-location-dot contact-item-icon"></i>
          </div>
          <div
            className="contact-item w-full group overflow-hidden relative bg-[#222] cursor-pointer p-12 
text-white rounded-x-xl"
          >
            <i
              className="fa-solid fa-clock text-[#f5b754] text-5xl group-hover:text-black 
transition-colors duration-300"
            ></i>
            <h4 className="font-bricolage text-2xl x1:text-4xl font-semibold mt-8 mb-2">
              Opening Hours
            </h4>
            <p className="text-[#999] text-base xl:text-xl group-hover:text-black">
              Mon-Sun: 8 AM - 7 PM
            </p>
            <i className="fa-solid fa-clock contact-item-icon"></i>
          </div>
          <div
            className="contact-item w-full group overflow-hidden relative bg-[#222] cursor-pointer p-12 
text-white rounded-x-xl"
          >
            <i
              className="fa-solid fa-phone text-[#f5b754] text-5xl group-hover:text-black 
transition-colors duration-300"
            ></i>
            <h4 className="font-bricolage text-2xl x1:text-4xl font-semibold mt-8 mb-2">
              Call Us
            </h4>
            <p className="text-[#999] text-base xl:text-xl group-hover:text-black">
              +91 0324-242-342
            </p>
            <i className="fa-solid fa-phone contact-item-icon"></i>
          </div>
        </div>
      </div>

      <div className="lg:px-[12%] px-[8%] bg-[#1b1b1b] pb-[150px]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-white text-3xl font-semibold mb-8 text-center">
              Get In Touch
            </h2>
            <form className="space-y-5 contact-inputs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full 
outline-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Number"
                  className="bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full 
outline-none"
                />
                <input
                  type="email"
                  placeholder="Subject*"
                  className="bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full 
outline-none"
                />
              </div>
              <textarea
                role="5"
                placeholder="Message*"
                className="bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full outline-none"
              ></textarea>
              <button
                type="button"
                className="bg-[#f5b754] hover:bg-[#e2a944] text-black px-14 py-4 text-xl rounded-full font-normal transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full"
              title="Map"
              src={googleMaps}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
