import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import about from "../../assets/about.jpg";
import Cars from "../../Cars.json";
import carType1 from "../../assets/car-1.jpg";
import carType2 from "../../assets/car-2.jpg";
import carType3 from "../../assets/car-3.jpg";
import carType4 from "../../assets/car-4.jpg";
import carType5 from "../../assets/car-5.jpg";
import carType6 from "../../assets/car-6.jpg";
import teams1 from "../../assets/test-1.jpg";
import teams2 from "../../assets/test-2.jpg";
import teams3 from "../../assets/test-3.jpg";
import teams4 from "../../assets/test-4.jpg";
import teams5 from "../../assets/test-5.jpg";

import { Link } from "react-router";

function About() {
  const [pickUpDate, setPickUpDate] = useState(null);
  const datePickerRef = useRef(null);
  const [dropOffDate, setDropoffDate] = useState(null);

  const openCalendar = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  };

  const [returnDate, setReturnDate] = useState(null);
  const returnPickerRef = useRef(null);

  const openreturnCalendar = () => {
    if (returnPickerRef.current) {
      returnPickerRef.current.setFocus();
    }
  };
  return (
    <>
      {/* PAGE SECTION */}
      <div className="banner-section about-banner-section flex justify-center items-center">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase">- Rentax</h6>
          <h1 className="text-5xl font-semibold font-bricolage text-[#f5b754]">
            {" "}
            <span className="text-white font-bricolage">About</span> Us
          </h1>
        </div>
      </div>

      {/* ABOUT */}
      <div className="about text-white lg:px-[10%] px-[8%] py-[150px]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-[#f5b754] mb-2">
              Speed Racer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 font-bricolage">
              We are More Than <br />
              <span className="text-[#f5b754] font-bricolage ">
                A Car Rental Company
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed my-6">
              Speed Racer prides itself on a commitment to both its fleet and
              its clientele, understanding that a well-maintained vehicle is the
              cornerstone of a positive rental experience. Each car undergoes
              rigorous multi-point inspections before and after every rental,
              ensuring optimal performance, safety, and cleanliness. This
              meticulous attention to detail extends to their customer service,
              where a dedicated team is always ready to assist with personalized
              recommendations, flexible booking options, and prompt roadside
              assistance. For SwiftDrive, it's more than just providing a car;
              it's about delivering peace of mind and a seamless journey for
              every client.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-
[#f5b754]"
                >
                  <i className="ri-check-double-line"></i>
                </div>
                <span className="text-white">Sports and Luxury Cars</span>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-
[#f5b754]"
                >
                  <i className="ri-check-double-line"></i>
                </div>
                <span className="text-white">Economy Cars</span>
              </div>
            </div>
            <button
              className="bg-[#f5b754] text-black px-8 py-4 rounded-full font-medium flex items-center 
gap-2 hover:bg-white transition"
            >
              Read More <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          <div className="relative">
            <img src={about} alt="" className="rounded-3xl" />
          </div>
        </div>
      </div>

      {/* LUXURY CARS */}
      <div className="luxury-cars text-white py-[150px]">
        <div className="text-center">
          <p className="uppercase text-sm tracking-widest text-[#f5b754] mb-2">
            Select Your Car
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 font-bricolage">
            Luxury
            <span className="text-[#f5b754] font-bricolage"> Car Fleet</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={1500}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-[60px] custome-swiper"
        >
          {Cars.map((car) => (
            <SwiperSlide
              key={car.id}
              className="transition-opacity duration-500"
            >
              <div className="bg-[#292929] rounded-2x1 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-[280px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2x1 font-semibold text-white font-bricolage">
                    {car.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm mt-3 text-gray-300">
                    <span>
                      <i className="text-[#f5b750] bi bi-wallet2"></i>
                      {car.door}
                    </span>
                    <span>
                      <i className="text-[#f5b750] bi bi-person-gear"></i>
                      {car.passengers}
                    </span>
                    <span>
                      <i className="text-[#f5b750] bi bi-diagram-3"></i>
                      {car.transmission}
                    </span>
                    <span>
                      <i className="text-[#f5b750] bi bi-backpack"></i>
                      {car.Bages}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <Link to={`/car/${car.id}`}>
                      <button
                        className="bg-[#f5b754] text-black px-4 py-2 rounded-full text-sm hover:bg-
[#f5b754]/90 transition"
                      >
                        Details
                      </button>
                    </Link>
                    <p className="text-[#f5b754] font-bold text-lg">
                      ${car.price}
                      <span className="text-sm text-white"> / Day</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CAR TYPE */}
      <div className="car-type lg:px-[12%] px-[8%] py-[150px] section-effect">
        <div className="text-center">
          <p className="uppercase text-sm tracking-widest text-[#f5b754] mb-2">
            Select Your Car
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 font-bricolage text-white">
            Category of our
            <span className="text-[#f5b754] font-bricolage"> Cars </span>
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-[70px] "
        >
          <SwiperSlide>
            <div className="car-type relative rounded-s-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={carType1}
                alt=""
                className="w-full h-72 object-cover z-[5]"
              />
              <h3 className="absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]">
                SUVs
              </h3>
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv car-type-curv">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-type relative rounded-s-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={carType2}
                alt=""
                className="w-full h-72 object-cover z-[5]"
              />
              <h3 className="absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]">
                Convertible
              </h3>
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv car-type-curv">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-type relative rounded-s-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={carType3}
                alt=""
                className="w-full h-72 object-cover z-[5]"
              />
              <h3 className="absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]">
                Sport Car
              </h3>
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv car-type-curv">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-type relative rounded-s-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={carType4}
                alt=""
                className="w-full h-72 object-cover z-[5]"
              />
              <h3 className="absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]">
                Luxury Cars
              </h3>
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv car-type-curv">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-type relative rounded-s-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={carType5}
                alt=""
                className="w-full h-72 object-cover z-[5]"
              />
              <h3 className="absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]">
                Sedon
              </h3>
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv car-type-curv">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-type relative rounded-s-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={carType6}
                alt=""
                className="w-full h-72 object-cover z-[5]"
              />
              <h3 className="absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]">
                Small Cars
              </h3>
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv car-type-curv">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* SERVICE */}
      <div className="our-service lg:px-[12%] px-[8%] py-[150px] bg-[#1b1b1b] section-effect">
        <div className="our-service-content mb-20 text-center text-white">
          <p className="uppercase text-sm tracking-[5px] text-[#f6b754] mb-2">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 font-bricolage">
            Other Services
          </h2>
        </div>

        <div className="our-service-wrapper">
          <div className="grid w-full gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className="font-semibold text-3xl mb-3 font-bricolage text-orange-400">
                Daily Car Rental
              </h5>
              <p className="text-white text-lg">
                Unlock your next adventure with our easy and affordable daily
                car rentals. Whether you're planning a spontaneous day trip,
                exploring the city, or just need a reliable ride for your
                errands, we have the perfect car for you. With a wide selection
                of clean and safe vehicles, booking your drive for the day is
                just minutes away.
              </p>
              <img
                src={carType1}
                alt=""
                className="section-item-curv-1 test-curv-1 block mx-auto mt-8"
              />
            </div>

            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className="font-semibold text-3xl mb-3 font-bricolage text-orange-400">
                Monthly Car Rental
              </h5>
              <p className="text-white text-lg">
                Experience the freedom of having a car without the long-term
                commitment of buying or leasing. Our monthly rental plan is the
                perfect solution for extended vacations, temporary relocations,
                or if you just need a reliable vehicle for a longer period.
                Enjoy a single, discounted monthly rate with maintenance
                included. Choose your car, get the keys, and settle in for the
                ride.
              </p>
              <img
                src={carType2}
                alt=""
                className="section-item-curv-1 test-curv-1 block mx-auto mt-8"
              />
            </div>

            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className="font-semibold text-3xl mb-3 font-bricolage text-orange-400">
                Annual Car Rental
              </h5>
              <p className="text-white text-lg">
                Meet the future of car ownership with our all-inclusive annual
                subscription plan. For one single yearly payment, enjoy a
                brand-new car with insurance, registration, and all maintenance
                handled by us. Say goodbye to loans, depreciation, and
                unexpected repair bills. It's the smartest, most flexible way to
                have a car for the entire year, completely hassle-free.
              </p>
              <img
                src={carType3}
                alt=""
                className="section-item-curv-1 test-curv-1 block mx-auto mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TEAMS */}
      <div className="lg:px-[12%] px-[8%] py-[150px] section-effect">
        <div className="text-center">
          <p className="uppercase text-sm tracking-[5px] text-[#f5b754] mb-2">
            - Certified Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage">
            <span className="text-[#f5b754] font-bricolage">
              Our <span className="text-white">Experts </span>Team
            </span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          spaceBetween={40}
          autoplay={{ delay: 3000 }}
          pagination={true}
          breakpoints={{
            1400: { slidesPerView: 3 },
            1199: { slidesPerView: 2 },
            767: { slidesPerView: 1.5 },
            0: { slidesPerView: 1 },
          }}
          className="mt-[70px] "
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className=" our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={teams1}
                alt=""
                className="w-full h-72 object-cover z-[5] "
              />
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv our-team-curv">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h4 className="text-xl lg:text-2xl mb-1 font-semibold font-bricolage">
                  Margaret Wallas
                </h4>
                <h6 className="text-[#f2f2f2] xl:text-lg text-sm">
                  Sales Department
                </h6>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className=" our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={teams2}
                alt=""
                className="w-full h-72 object-cover z-[5] "
              />
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv our-team-curv">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h4 className="text-xl lg:text-2xl mb-1 font-semibold font-bricolage">
                  George Blake
                </h4>
                <h6 className="text-[#f2f2f2] xl:text-lg text-sm">
                  Sales Department
                </h6>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <div className=" our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={teams3}
                alt=""
                className="w-full h-72 object-cover z-[5] "
              />
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv our-team-curv">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h4 className="text-xl lg:text-2xl mb-1 font-semibold font-bricolage">
                  Katherine Mcklain
                </h4>
                <h6 className="text-[#f2f2f2] xl:text-lg text-sm">
                  Sales Department
                </h6>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
            <div className=" our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={teams4}
                alt=""
                className="w-full h-72 object-cover z-[5] "
              />
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv our-team-curv">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h4 className="text-xl lg:text-2xl mb-1 font-semibold font-bricolage">
                  Andrea Larson
                </h4>
                <h6 className="text-[#f2f2f2] xl:text-lg text-sm">
                  Sales Department
                </h6>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 5 */}
          <SwiperSlide>
            <div className=" our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img
                src={teams5}
                alt=""
                className="w-full h-72 object-cover z-[5] "
              />
              <div className="absolute z-[5]">
                <div className="curv">
                  <div className="section-item-curv our-team-curv">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h4 className="text-xl lg:text-2xl mb-1 font-semibold font-bricolage">
                  James Walker
                </h4>
                <h6 className="text-[#f2f2f2] xl:text-lg text-sm">
                  Sales Department
                </h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default About;
