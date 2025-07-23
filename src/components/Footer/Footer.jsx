import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import brand1 from "../../assets/brand-1.png";
import brand2 from "../../assets/brand-2.png";
import brand3 from "../../assets/brand-3.png";
import brand4 from "../../assets/brand-4.png";
import brand5 from "../../assets/brand-5.png";
import brand6 from "../../assets/brand-6.png";
import brand7 from "../../assets/brand-7.png";

function Footer() {
  return (
    <>
      <div className="footer-banner text-white lg:px-[12%] px-[8%] py-[150px] ">
        <div className="footer-banner-content text-center text-white relative">
          <p className="uppercase text-sm tracking-[5px] text-[#f5b754] mb-2">
            Rent Your Car
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage">
            Interested in Renting?
          </h2>
          <p className="py-3">Don't hesitate and send us a message</p>
          <div className="footer-banner-button mt-5 text-black flex flex-col sm:flex-row gap-3">
            <button className="btn btn-custom bg-[#f5b754] py-4 px-14 text-lg font-bricolage rounded-full flex items-center hover:translate-y-[-10px] hover:bg-white transition duration-300">
              <i className="fa-brands fa-whatsapp pr-2 text-2xl"></i>
              WhatsApp
            </button>

            <button
              className="btn btn-custom bg-transparent border border-white  py-4 px-14 text-xl font-bricolage rounded-full 
flex items-center hover:translate-y-[-10px] hover:bg-[#f5b754] transition duration-300 text-white hover:text-black"
            >
              <i className="ri-arrow-right-up-line text-2xl pl-2"></i>
              Rent Now
            </button>
          </div>
        </div>
      </div>

      <div className="footer-brands bg-[#222222] w-full lg:px-[12%] px-[8%] py-[50px]">
        <Swiper
          spaceBetween={0}
          slidesPerView={6}
          loop={true}
          autoplay={true}
          className="footer-brands-swiper"
          breakpoints={{
            1399: {
              slidesPerView: 6,
            },
            767: {
              slidesPerView: 5,
            },
            575: {
              slidesPerView: 4,
            },
            0: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="brand-image h-[100px] w-full group overflow-hidden transition">
              <img
                src={brand1}
                alt="brand-image"
                className="w-full h-full object-cover filter grayscale-0 group-hover:grayscale transition duration-300"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="brand-image h-[100px] 
w-full group overflow-hidden transition"
            >
              <img
                src={brand2}
                alt="brand-image"
                className="w-full h-full object-cover 
filter grayscale-0 
group-hover:grayscale transition 
duration-300"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="brand-image h-[100px] 
w-full group overflow-hidden transition"
            >
              <img
                src={brand3}
                alt="brand-image"
                className="w-full h-full object-cover 
filter grayscale-0 
group-hover:grayscale transition 
duration-300"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="brand-image h-[100px] 
w-full group overflow-hidden transition"
            >
              <img
                src={brand4}
                alt="brand-image"
                className="w-full h-full object-cover 
filter grayscale-0 
group-hover:grayscale transition 
duration-300"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="brand-image h-[100px] 
w-full group overflow-hidden transition"
            >
              <img
                src={brand5}
                alt="brand-image"
                className="w-full h-full object-cover 
filter grayscale-0 
group-hover:grayscale transition 
duration-300"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="brand-image h-[100px] 
w-full group overflow-hidden transition"
            >
              <img
                src={brand6}
                alt="brand-image"
                className="w-full h-full object-cover 
filter grayscale-0 
group-hover:grayscale transition 
duration-300"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="brand-image h-[100px] 
w-full group overflow-hidden transition"
            >
              <img
                src={brand7}
                alt="brand-image"
                className="w-full h-full object-cover 
filter grayscale-0 
group-hover:grayscale transition 
duration-300"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <footer className="text-white lg:px-[12%] px-[8%] pt-16 flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 border border-[#222] w-full">
          <div className="flex items-center gap-4 p-6 border-r border-r-[#222]">
            <div className="bg-[#f5b754] text-black rounded-full w-12 h-12 flex items-center justify-center">
              <i className="ri-phone-line text-2xl"></i>
            </div>
            <div>
              <h5 className="font-semibold font-bricolage">Call us</h5>
              <p>+034 32-432-4524</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1a1a1a] p-6 border-r border-r-[#222]">
            <div
              className="bg-[#f5b754] text-black 
rounded-full w-12 h-12 flex items-center 
justify-center"
            >
              <i className="fa-regular fa-envelope text-2xl"></i>
            </div>
            <div>
              <h5
                className="font-semibold 
font-bricolage"
              >
                Email us
              </h5>
              <p>info@speedracer.com</p>
            </div>
          </div>

          <div
            className="flex items-center gap-4 bg-
[#1a1a1a] p-6 border-r border-r-[#222]"
          >
            <div
              className="bg-[#f5b754] text-black 
rounded-full w-12 h-12 flex items-center 
justify-center"
            >
              <i className="fa-solid fa-map-pin text-2xl"></i>
            </div>
            <div>
              <h5
                className="font-semibold 
font-bricolage"
              >
                Address
              </h5>
              <p>Vadodara, Whater Tower, Office 124</p>
            </div>
          </div>
        </div>

        <div className="border-b border-[#222] pb-8 w-full text-white px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1">
              <h1 className="text-2x1 font-bold text-white mb-3">
                <a href="#" className="text-4xl font-bold logo font-bricolage">
                  Speed <span>Racer</span>
                </a>
              </h1>
              <p className="text-[#999] mb-6 md:w-[90%] w-full">
                Rent your dream car with the best price of the market.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="border border-[#f5b754] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f5b754] hover:text-black transition-colors duration-300"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a
                  href="#"
                  className="border border-[#f5b754] 
text-white rounded-full w-10 h-10 
flex items-center justify-center 
hover:bg-[#f5b754] hover:text-black 
transition-colors duration-300"
                >
                  <i
                    className="fa-brands 
fa-x-twitter"
                  ></i>
                </a>

                <a
                  href="#"
                  className="border border-[#f5b754] 
text-white rounded-full w-10 h-10 
flex items-center justify-center 
hover:bg-[#f5b754] hover:text-black 
transition-colors duration-300"
                >
                  <i
                    className="fa-brands 
fa-tiktok"
                  ></i>
                </a>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-2xl font-semibold font-bricolage mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-[#999] footer-menu relative">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#f5b754] relative ps-5 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#f5b754] 
relative ps-5 transition 
duration-300"
                  >
                    Cars
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#f5b754] 
relative ps-5 transition 
duration-300"
                  >
                    Cars Type
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#f5b754] 
relative ps-5 transition 
duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#f5b754] 
relative ps-5 transition 
duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="text-2x1 font-semibold font-bricolage mb-4">
                Suscribe
              </h4>
              <p className="text-[#999] mb-4 text-sm">
                The best rent cars webpage in the world.
              </p>
              <div className="flex items-center border border-[#f5b754] rounded-full px-4 py-2">
                <input
                  type="email"
                  placeholder="Your Email Adress"
                  className="bg-transparent outline-none text-white placeholder:text-[#aaa] flex-1"
                />
                <button className="bg-[#f5b754] text-black rounded-full w-10 h-10 flex items-center justify-center">
                  <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#999] text-center text-base relative py-6">
          <p className="font-bricolage">
            © 2025 <span className="text-white">Frederick Osorio</span>. All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
