import React from "react";
import carType1 from "../../assets/car-1.jpg";
import carType2 from "../../assets/car-2.jpg";
import carType3 from "../../assets/car-3.jpg";
import carType4 from "../../assets/car-4.jpg";
import carType5 from "../../assets/car-5.jpg";
import carType6 from "../../assets/car-6.jpg";

function Services() {
  return (
    <>
      {/* PAGE SECTION */}
      <div className="banner-section about-banner-section flex justify-center items-center">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase">- What we Do</h6>
          <h1 className="text-5xl font-semibold font-bricolage text-[#f5b754]">
            {" "}
            <span className="text-white font-bricolage">Our</span> Services
          </h1>
        </div>
      </div>

      {/* SERVICE */}
      <div className="our-service lg:px-[12%] px-[8%] py-[150px] bg-[#1b1b1b] section-effect">
        <div className="our-service-wrapper">
          <div className="grid w-full gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className="font-semibold text-3xl mb-3 font-bricolage text-orange-400">
                Airport Service
              </h5>
              <p className="text-white text-lg">
                Traveling soon? Let Speed Racer take the stress out of your
                airport travel. We provide punctual, safe, and comfortable
                transfers with our professional drivers and clean, spacious
                vehicles. Skip the hassle of parking and traffic, and arrive at
                your terminal feeling relaxed and on time. Book your trip today!
                Call! us or visit us!.
              </p>
              <img
                src={carType4}
                alt=""
                className="section-item-curv-1 test-curv-1 block mx-auto mt-8"
              />
            </div>

            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className="font-semibold text-3xl mb-3 font-bricolage text-orange-400">
                Premium Taxi-Service
              </h5>
              <p className="text-white text-lg">
                Forget the stress of traffic, the uncertainty of ride-sharing
                apps, and the hassle of navigating the city. Speed Racer offers
                an unparalleled private transportation experience designed for
                discerning professionals, visitors, and residents who value
                safety, punctuality, and absolute comfort. Whether you're
                heading to a crucial business meeting in San Pedro, catching a
                flight from Aeropuerto Internacional de Monterrey, or enjoying a
                special evening out, our service is tailored to meet your
                highest expectations.
              </p>
              <img
                src={carType5}
                alt=""
                className="section-item-curv-1 test-curv-1 block mx-auto mt-8"
              />
            </div>

            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className="font-semibold text-3xl mb-3 font-bricolage text-orange-400">
                Pet Transport
              </h5>
              <p className="text-white text-lg">
                We know your pet is part of your family. Their safety and
                well-being are your top priority, and they are ours as well.
                Speed Racer was born from the need for a professional, safe, and
                compassionate transport service designed exclusively for pets.
                Forget the anxiety of traveling in an unprepared car, the risks
                of inadequate transport, or the refusal of service from
                conventional taxis. We offer a reliable solution for every trip
                your pet needs to make.
              </p>
              <img
                src={carType6}
                alt=""
                className="section-item-curv-1 test-curv-1 block mx-auto mt-8"
              />
            </div>
          </div>
        </div>
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
    </>
  );
}

export default Services;
