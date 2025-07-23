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
import test1 from "../../assets/test-1.jpg";
import test2 from "../../assets/test-2.jpg";
import test3 from "../../assets/test-3.jpg";
import newscar1 from "../../assets/Banner-1.jpg";
import newscar2 from "../../assets/banner-2.jpg";
import newscar3 from "../../assets/banner-car.jpg";
import newscar4 from "../../assets/car-5.jpg";
import { Link } from "react-router";

function Index() {
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
      {/* HERO */}
      <div className="hero w-[100%] h-[100vh] overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1500}
          className="hero-swiper w-full h-full"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="hero-slide hero-slide1 w-full h-full flex items-center px-[12%]">
              <div className="hero-content text-white">
                <span className="font-bricolage text-1x1 uppercase tracking-widest">
                  Premium
                </span>
                <h1 className="font-bricolage text-9xl hero-title my-3">
                  Rental Car
                </h1>
                <p className="my-2 text-2xl font-bricolage hero-subtitle text-gray-300">
                  You can Rent any of our Luxurious Cars.
                </p>
                <p className="my-7 w-[60%] hero-pere text-gray-300">
                  Experience premium car rentals with comfort, style and
                  affordability-perferct for road trips, business travel, or
                  luxury weekend getaways.
                </p>
                <div className="hero-btns flex gap-4 mt-8">
                  <button className="default-btn bg-[#f5b754] transition-all hover:bg-white hover:text-black px-7 py-5 font-bricolage rounded-full transform hover:-translate-y-1 ">
                    View More &nbsp;
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                  <button className="default-btn border px-7py-5 font-bricolage rounded-full transition-all hover:bg-[#f5b754] hover:border-transparent hover:-translate-y-1">
                    Rent Now
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className="hero-slide hero-slide2 w-full h-full flex items-center px-[12%]">
              <div className="hero-content text-white">
                <span className="font-bricolage text-1x1 uppercase tracking-widest">
                  Premium
                </span>
                <h1 className="font-bricolage text-9xl hero-title my-3">
                  Rental Car
                </h1>
                <p className="my-2 text-2xl font-bricolage hero-subtitle text-gray-300">
                  You can Rent any of our Luxurious Cars.
                </p>
                <p className="my-7 w-[60%] hero-pere text-gray-300">
                  Experience premium car rentals with comfort, style and
                  affordability-perferct for road trips, business travel, or
                  luxury weekend getaways.
                </p>
                <div className="hero-btns flex gap-4 mt-8">
                  <button
                    className="default-btn bg-[#f5b754] transition-all hover:bg-white hover:text-black 
px-7 py-5 font-bricolage rounded-full transform hover:-translate-y-1 "
                  >
                    View More &nbsp;
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                  <button
                    className="default-btn border px-7py-5 font-bricolage rounded-full transition-all 
hover:bg-[#f5b754] hover:border-transparent hover:-translate-y-1"
                  >
                    Rent Now
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* SLIDE 3 */}
          <SwiperSlide>
            <div className="hero-slide hero-slide3 w-full h-full flex items-center px-[12%]">
              <div className="hero-content text-white">
                <span className="font-bricolage text-1x1 uppercase tracking-widest">
                  Premium
                </span>
                <h1 className="font-bricolage text-9xl hero-title my-3">
                  Rental Car
                </h1>
                <p className="my-2 text-2xl font-bricolage hero-subtitle text-gray-300">
                  You can Rent any of our Luxurious Cars.
                </p>
                <p className="my-7 w-[60%] hero-pere text-gray-300">
                  Experience premium car rentals with comfort, style and
                  affordability-perferct for road trips, business travel, or
                  luxury weekend getaways.
                </p>
                <div className="hero-btns flex gap-4 mt-8">
                  <button
                    className="default-btn bg-[#f5b754] transition-all hover:bg-white hover:text-black 
px-7 py-5 font-bricolage rounded-full transform hover:-translate-y-1 "
                  >
                    View More &nbsp;
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                  <button
                    className="default-btn border px-7py-5 font-bricolage rounded-full transition-all 
hover:bg-[#f5b754] hover:border-transparent hover:-translate-y-1"
                  >
                    Rent Now
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Book Option */}
        <div className="book-option bg-[#1f1f1f] text-white w-[90%] max-w-[1200px] mx-auto mt-[-50px] rounded-3xl px-6 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 shadow-lg z-50 absolute bottom-[0%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
          {/* CARS TYPE */}
          <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
            <button className="flex items-center gap-2 w-full justify-between text-gray 400">
              Choose Car Type{" "}
              <i className="ri-arrow-down-s-line text-yellow-500"></i>
            </button>
            <div className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-yellow-500 rounded-sm shadow-md opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-out z50">
              <ul className="divide-y divide-gray-700">
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Abu Dhabi
                </li>
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Alain
                </li>
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Dubai
                </li>
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Sharjah
                </li>
              </ul>
            </div>
          </div>
          {/* PICK UP LOCATION */}
          <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
            <button className="flex text-white items-center gap-2 w-full justify-between">
              Pick Up Location
              <i className="ri-arrow-down-s-line text-yellow-500"></i>
            </button>
            <div
              className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-yellow-500 rounded-sm 
shadow-md opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 
group-hover:visible transition-all duration-300 ease-out z50"
            >
              <ul className="divide-y divide-gray-700">
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Abu Dhabi
                </li>
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Alain
                </li>
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Dubai
                </li>
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Sharjah
                </li>
              </ul>
            </div>
          </div>
          {/* PICK UP DATE */}
          <div
            className="relative w-full lg-w:auto px-4 py-3 flex items-center border-r border-gray-600 cursor-pointer"
            onClick={openCalendar}
          >
            <DatePicker
              selected={pickUpDate}
              onChange={(date) => setPickUpDate(date)}
              dateFormat="dd MMM yyyy"
              placeholderText="Pick Up Date"
              ref={datePickerRef}
              className={`bg-[#1f1f1f] placeholder:text-white outline-none cursor-pointer w-full ${
                !pickUpDate ? "text-gray-400" : ""
              } `}
              calendarClassName="dark-datepicker"
              popperPlacement="bottom-start"
            />
            <i className="ri-calendar-line text-yellow-500 pointer-events-none"></i>
          </div>
          {/* DROP LOCATION */}
          <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
            <button className="flex items-center gap-2 w-full justify-between text-gray 400">
              Drop Off Location
              <i className="ri-arrow-down-s-line text-yellow-500"></i>
            </button>
            <div
              className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-yellow-500 rounded-sm 
shadow-md opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 
group-hover:visible transition-all duration-300 ease-out z50"
            >
              <ul className="divide-y divide-gray-700">
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Drop Off Location
                </li>
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Abu Dhabi
                </li>
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Alain
                </li>
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Dubai
                </li>
                <li className="px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer">
                  Sharjah
                </li>
              </ul>
            </div>
          </div>
          {/* RETURN DATE */}
          <div
            className="relative w-full lg-w:auto px-4 py-3 flex items-center 
cursor-pointer"
            onClick={openreturnCalendar}
          >
            <DatePicker
              selected={dropOffDate}
              onChange={(date) => setDropoffDate(date)}
              dateFormat="dd MMM yyyy"
              placeholderText="Return Date"
              ref={returnPickerRef}
              className={`bg-[#1f1f1f] placeholder:text-white outline-none cursor-pointer w-full ${
                !returnDate ? "text-white" : ""
              } `}
              calendarClassName="dark-datepicker"
              popperPlacement="bottom-start"
            />
            <i className="ri-calendar-line text-yellow-500 pointer-events-none"></i>
          </div>
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
                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#f5b754]">
                  <i className="ri-check-double-line"></i>
                </div>
                <span className="text-white">Sports and Luxury Cars</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#f5b754]">
                  <i className="ri-check-double-line"></i>
                </div>
                <span className="text-white">Economy Cars</span>
              </div>
            </div>
            <button className="bg-[#f5b754] text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white transition">
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
                      <button className="bg-[#f5b754] text-black px-4 py-2 rounded-full text-sm hover:bg-[#f5b754]/90 transition">
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

      {/* TESTIMONIALS */}
      <div className="Testimonials lg:px-[12%] px-[8%] py-[150px] bg-[#1b1b1b] section-effect">
        <div className="our-service-content mb-20 text-center text-white">
          <p className="uppercase text-sm tracking-[5px] text-[#f5b754] mb-2">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 font-bricolage">
            What Our Client's{" "}
            <span className="text-[#f5b754] font-bricolage">Say</span>
          </h2>
        </div>

        <Swiper
          slidesPerView={1}
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            {/* Main Card: a centered flex column */}
            <div className="rounded-[30px] bg-[#222] text-center p-8 shadow-md h-full flex flex-col items-center justify-center">
              {/* STARS */}
              <div className="flex space-x-1 mb-6">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-[#f4a950]">
                      ★
                    </span>
                  ))}
              </div>

              {/* NAME (Above the image) */}
              <div className="mb-4">
                <p className="font-semibold font-bricolage text-[#f5b754]">
                  Olivia Brown
                </p>
                <p className="text-[#999] text-sm">Customer</p>
              </div>

              {/* IMAGE (Centered and circular) */}
              <img
                src={test1}
                alt="user"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#f5b754]/50 mb-6"
              />

              {/* OPINION TEXT (Below the image) */}
              <div className="text-[#ccc] text-lg max-w-md">
                <span className="text-7xl text-[#f4a950] leading-none">"</span>
                Did you know that speed racer was translated as Meteoro in
                spanish?, what a crazy traduction! lol
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* Main Card: a centered flex column */}
            <div className="rounded-[30px] bg-[#222] text-center p-8 shadow-md h-full flex flex-col items-center justify-center">
              {/* STARS */}
              <div className="flex space-x-1 mb-6">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-[#f4a950]">
                      ★
                    </span>
                  ))}
              </div>

              {/* NAME (Above the image) */}
              <div className="mb-4">
                <p className="font-semibold font-bricolage text-[#f5b754]">
                  Jesus Mclain
                </p>
                <p className="text-[#999] text-sm">Customer</p>
              </div>

              {/* IMAGE (Centered and circular) */}
              <img
                src={test2}
                alt="user"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#f5b754]/50 mb-6"
              />

              {/* OPINION TEXT (Below the image) */}
              <div className="text-[#ccc] text-lg max-w-md">
                <span className="text-7xl text-[#f4a950] leading-none">"</span>
                My wife caught me cheating so she breaked what was supposed to
                be my "new car", in reality it was a car that I rented with
                speed racer, now we both are denouncing her, what a great
                service haha!
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* Main Card: a centered flex column */}
            <div className="rounded-[30px] bg-[#222] text-center p-8 shadow-md h-full flex flex-col items-center justify-center">
              {/* STARS */}
              <div className="flex space-x-1 mb-6">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-[#f4a950]">
                      ★
                    </span>
                  ))}
              </div>

              {/* NAME (Above the image) */}
              <div className="mb-4">
                <p className="font-semibold font-bricolage text-[#f5b754]">
                  Sonia Blade
                </p>
                <p className="text-[#999] text-sm">Customer</p>
              </div>

              {/* IMAGE (Centered and circular) */}
              <img
                src={test3}
                alt="user"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#f5b754]/50 mb-6"
              />

              {/* OPINION TEXT (Below the image) */}
              <div className="text-[#ccc] text-lg max-w-md">
                <span className="text-7xl text-[#f4a950] leading-none">"</span>
                Perfect service and efficient, I rob a bank and used the
                selection of cars with speed racer and no cop could reach me,
                10/10.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* BLOG */}
      <div className="blog lg:px-[12%] px-[8%] py-[150px] bg-[#1b1b1b] section-effect">
        <div className="blog-content mb-20 text-center text-white">
          <p className="uppercase text-sm tracking-[5px] text-[#f5b754] mb-2">
            Our Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 font-bricolage">
            Latest <span className="text-[#f5b754] font-bricolage"> News</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300">
              <img
                src={newscar1}
                alt="blog-image"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-8 px-5">
                <div className="relative bg-[#1d1d1d] text-white p-5 rounded-2xl shadow-md z-10 transition-all duration-500 group-hover:translate-y-3 group-hover:shadow-2xl flex flex-col justify-between">
                  <span className="absolute top-4 left-5 bg-[#f4a950] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md">
                    Jul 22, 2025
                  </span>

                  <div className="text-xs text-[#f4a950] mb-2 flex gap-4 items-center pt-8">
                    <span className="flex items-center gap-1">
                      <i className="ri-user-line text-sm"></i> John S
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-folder-line text-sm"></i> Vehicles
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white leading-snug mb-3">
                    <a
                      href="#"
                      className="hover:text-[#f4a950] transition-colors duration-300"
                    >
                      Top 10 Best Sport cars
                    </a>
                  </h3>
                  <a
                    href="#"
                    className="w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f4a950] flex items-center justify-center transition-all duration-500 hover:bg-[#f4a950] "
                  >
                    <i className="ri-arrow-right-up-line text-[#f5b754] hover:text-[#f5b754] transition duration-300"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300">
              <img
                src={newscar2}
                alt="blog-image"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-8 px-5">
                <div
                  className="relative bg-[#1d1d1d] text-white p-5 rounded-2xl shadow-md z-10 
transition-all duration-500 group-hover:translate-y-3 group-hover:shadow-2xl flex flex-col 
justify-between"
                >
                  <span
                    className="absolute top-4 left-5 bg-[#f4a950] text-black text-xs font-semibold px-3 
py-1 rounded-md shadow-md"
                  >
                    Jul 15, 2025
                  </span>

                  <div className="text-xs text-[#f4a950] mb-2 flex gap-4 items-center pt-8">
                    <span className="flex items-center gap-1">
                      <i className="ri-user-line text-sm"></i> Martin C
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-folder-line text-sm"></i> Vehicles
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white leading-snug mb-3">
                    <a
                      href="#"
                      className="hover:text-[#f4a950] transition-colors duration-300"
                    >
                      Rental cost of sport and other cars
                    </a>
                  </h3>
                  <a
                    href="#"
                    className="w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 
group-hover:translate-y-0 rounded-full border border-[#f4a950] flex items-center 
justify-center transition-all duration-500 hover:bg-[#f4a950] "
                  >
                    <i
                      className="ri-arrow-right-up-line text-[#f5b754] hover:text-[#f5b754] transition 
duration-300"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300">
              <img
                src={newscar3}
                alt="blog-image"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-8 px-5">
                <div
                  className="relative bg-[#1d1d1d] text-white p-5 rounded-2xl shadow-md z-10 
transition-all duration-500 group-hover:translate-y-3 group-hover:shadow-2xl flex flex-col 
justify-between"
                >
                  <span
                    className="absolute top-4 left-5 bg-[#f4a950] text-black text-xs font-semibold px-3 
py-1 rounded-md shadow-md"
                  >
                    Jun 22, 2025
                  </span>

                  <div className="text-xs text-[#f4a950] mb-2 flex gap-4 items-center pt-8">
                    <span className="flex items-center gap-1">
                      <i className="ri-user-line text-sm"></i> Frederick C
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-folder-line text-sm"></i> Vehicles
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white leading-snug mb-3">
                    <a
                      href="#"
                      className="hover:text-[#f4a950] transition-colors duration-300"
                    >
                      My car was stolen, what to do?
                    </a>
                  </h3>
                  <a
                    href="#"
                    className="w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 
group-hover:translate-y-0 rounded-full border border-[#f4a950] flex items-center 
justify-center transition-all duration-500 hover:bg-[#f4a950] "
                  >
                    <i
                      className="ri-arrow-right-up-line text-[#f5b754] hover:text-[#f5b754] transition 
duration-300"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300">
              <img
                src={newscar4}
                alt="blog-image"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-8 px-5">
                <div
                  className="relative bg-[#1d1d1d] text-white p-5 rounded-2xl shadow-md z-10 
transition-all duration-500 group-hover:translate-y-3 group-hover:shadow-2xl flex flex-col 
justify-between"
                >
                  <span
                    className="absolute top-4 left-5 bg-[#f4a950] text-black text-xs font-semibold px-3 
py-1 rounded-md shadow-md"
                  >
                    Jun 22, 2025
                  </span>

                  <div className="text-xs text-[#f4a950] mb-2 flex gap-4 items-center pt-8">
                    <span className="flex items-center gap-1">
                      <i className="ri-user-line text-sm"></i> Matias P
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-folder-line text-sm"></i> Vehicles
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white leading-snug mb-3">
                    <a
                      href="#"
                      className="hover:text-[#f4a950] transition-colors duration-300"
                    >
                      Had an accident with the car, what should I do?
                    </a>
                  </h3>
                  <a
                    href="#"
                    className="w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 
group-hover:translate-y-0 rounded-full border border-[#f4a950] flex items-center 
justify-center transition-all duration-500 hover:bg-[#f4a950] "
                  >
                    <i
                      className="ri-arrow-right-up-line text-[#f5b754] hover:text-[#f5b754] transition 
duration-300"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Index;
