import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import teams1 from "../../assets/test-1.jpg";
import teams2 from "../../assets/test-2.jpg";
import teams3 from "../../assets/test-3.jpg";
import teams4 from "../../assets/test-4.jpg";
import teams5 from "../../assets/test-5.jpg";

function Teams() {
  const [activeTab, setActiveTab] = useState("Biography");

  const tabs = ["Biography", "Education", "Awards"];

  const content = {
    Biography:
      "This Sales Man is a results-driven sales professional with over [Number] years of experience in the Automotive sector. He excels at building lasting client relationships and consistently exceeding sales targets. This Sales Man is passionate about understanding customer needs and delivering solutions that drive real value and growth.",
    Education:
      "This Sales Man is a results-driven sales professional with over [Number] years of experience in the Automotive sector. He excels at building lasting client relationships and consistently exceeding sales targets. This Sales Man is passionate about understanding customer needs and delivering solutions that drive real value and growth.",
    Awards:
      "This Sales Man is a results-driven sales professional with over [Number] years of experience in the Automotive sector. He excels at building lasting client relationships and consistently exceeding sales targets. This Sales Man is passionate about understanding customer needs and delivering solutions that drive real value and growth.",
  };

  return (
    <>
      <div className="banner-section relative teams-section flex justify-center items-center">
        <div className="banner-section.content text-center z-10">
          <h6 className="uppercase font-bricolage text-[#f5b754]">
            SALES CONSULTANT
          </h6>
          <h1 className="text-6xl font-bold font-bricolage text-white">
            MARGARET WALLAS
          </h1>
        </div>
      </div>

      <div className="teams-container px-[8%] 2x1:px-[18%] py-[80px] bg-[#121212] text-white">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="teams-images w-full h-full lg:w-1/2 relative">
            <div className="teams-image mb-10">
              <img src={teams1} alt="teams" />
            </div>

            <div className="teams-icons flex gap-4 mt-4">
              <i className="fa-brands fa-facebook-f hover:bg-[#f5b754] transition-colors cursor-pointer border border-[#f5b754] h-14 w-14 text-2xl flex justify-center items-center rounded-full"></i>
              <i className="fa-brands fa-x-twitter hover:bg-[#f5b754] transition-colors cursor-pointer border border-[#f5b754] h-14 w-14 text-2xl flex justify-center items-center rounded-full"></i>
              <i className="fa-brands fa-instagram hover:bg-[#f5b754] transition-colors cursor-pointer border border-[#f5b754] h-14 w-14 text-2xl flex justify-center items-center rounded-full"></i>
              <i className="fa-brands fa-tiktok hover:bg-[#f5b754] transition-colors border cursor-pointer border-[#f5b754] h-14 w-14 text-2xl flex justify-center items-center rounded-full"></i>
            </div>

            {/* EMAIL */}
            <p className="mt-4 text-[#999] text-lg">
              My E-mail Address:{" "}
              <a href="#" className="text-white underline">
                fakeEmail@gmail.com
              </a>
            </p>
          </div>
          {/* TEXT CONTENT */}
          <div className="teams-content w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-bricolage">
              Hello I'm Margaret Wallas and I work as your sales consultant at
              Speed Racer.
            </h2>
            <p className="text-[#999] text-lg mb-8">
              I have been a sales consultant for more than 5 years, I always
              please my customers and make them the best deal of their life for
              the car of their life. Contact me if you are ready for a better
              life.
            </p>

            <ul className="mb-9 space-y-3">
              <li className="flex items-center gap-2  text-[#999] ">
                <i className="fa-solid fa-check text-[#f5b754] bg-[#222] px-4 py-3  rounded-[50px]"></i>
                <p className="text-[#f5b754]">B Driver License</p>
              </li>
              <li className="flex items-center gap-2  text-[#999] ">
                <i className="fa-solid fa-check text-[#f5b754] bg-[#222] px-4 py-3  rounded-[50px]"></i>
                <p className="text-[#f5b754]">Bachelor's Degree</p>
              </li>
              <li className="flex items-center gap-2  text-[#999] ">
                <i className="fa-solid fa-check text-[#f5b754] bg-[#222] px-4 py-3  rounded-[50px]"></i>
                <p className="text-[#f5b754]">English / Spanish</p>
              </li>
            </ul>

            <div className="flex border-b border-[#f5b754] mb-4 space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`text-xl pb-4 font-semibold transition duration-300 ${
                    activeTab === tab
                      ? "text-[#f5b754]"
                      : "text-white hover:text-[#f5b754]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <p className="text-[#888] leading-relaxed text-lg">
              {content[activeTab]}
            </p>
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

export default Teams;
