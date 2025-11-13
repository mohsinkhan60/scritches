import { motion } from "motion/react";

const ScritchesWorks = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-5 mb-20">
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <span className="inline-block bg-[#53A57D] text-white text-xs sm:text-[13px] font-semibold px-3 sm:px-4 py-1 rounded-xl mb-4 sm:mb-6">
          BENEFITS
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 px-2">
          Scritches Works for You
        </h1>
      </div>

      <div className="max-width-full md:mx-[38px] mx-auto">
        <div className="gap-6 lg:gap-8 flex flex-col xl:flex-row items-center justify-center">
          <div className="lg:col-span-1 flex-1 space-y-4 sm:space-y-6 w-full">
            <div>
              <h2 className="leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-slate-950 mb-3 sm:mb-4">
                Better Bookings, Better Business
              </h2>
              <p className="text-[#686767] font-medium text-base sm:text-lg pb-4 pt-1 md:text-[19px]">
                With Scritches, online booking is a breeze for you and your
                clients. They can request services anytime, anywhere, making it
                easier than ever to connect with new clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-xl border border-gray-200">
                <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 bg-primary text-white rounded-lg flex items-center justify-center text-lg sm:text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#343434] text-sm sm:text-[16px]">
                    Allow booking 24/7, even when you're with pets
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-xl border border-gray-200">
                <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 bg-primary text-white rounded-lg flex items-center justify-center text-lg sm:text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                    <path d="M12 22V12" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <path d="m7.5 4.27 9 5.15" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#343434] text-sm sm:text-[16px]">
                    Attract new clients you couldn't connect with before
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-xl border border-gray-200">
                <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 bg-primary text-white rounded-lg flex items-center justify-center text-lg sm:text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#343434] text-sm sm:text-[16px]">
                    Eliminate back-and-forth coordination
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-xl border border-gray-200">
                <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 bg-primary text-white rounded-lg flex items-center justify-center text-lg sm:text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#343434] text-sm sm:text-[16px]">
                    Enhance your professional image with a polished system
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex-1 w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[676px] mx-auto h-96 sm:h-110 md:h-120 lg:h-149">
              <img
                className="w-full h-full rounded-2xl sm:rounded-3xl object-cover"
                alt="Background shadow"
                src="/images/shadow.avif"
              />

              <div className="absolute -rotate-6 sm:-rotate-8 md:-rotate-10 -top-2 sm:-top-1 md:-top-1 left-1 lg:-left-10 w-auto">
                <motion.img
                  initial={{ scale: 0.7, opacity: 0, translateY: 150 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    translateY: 0,
                  }}
                  viewport={{ once: true }}
                  alt="Calendar view"
                  className="w-full h-52 sm:h-64 md:h-80 lg:h-98 object-contain rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl"
                  src="/images/calander.avif"
                />
              </div>

              <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -right-2 sm:-right-2 md:-right-4 z-20 w-auto">
                <motion.img
                  initial={{ scale: 0.7, opacity: 0, translateY: 150 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    translateY: 0,
                  }}
                  viewport={{ once: true }}
                  alt="Booking summary"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-130 object-contain rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl"
                  src="/images/bookingSummary.avif"
                />
              </div>

              <motion.div
                initial={{ scale: 0.7, opacity: 0, translateY: 150 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  translateY: 0,
                }}
                viewport={{ once: true }}
                className="absolute cursor-pointer bottom-2 sm:bottom-4 md:bottom-4 lg:bottom-6 rotate-2 sm:rotate-2 md:rotate-2 right-44 sm:right-44 md:right-48 lg:right-78 z-50"
              >
                <button className="font-bold flex cursor-pointer bg-primary text-white py-2.5 px-12 sm:py-3 sm:px-14 md:py-3 md:px-16 lg:py-[18px] lg:px-26 text-sm sm:text-sm md:text-base rounded-full shadow-lg sm:shadow-xl md:shadow-2xl hover:bg-[#44986f] transition-all duration-300 hover:scale-105">
                  Book Now
                </button>
                <p className="-rotate-8 text-sm -ml-10 -mb-12">
                  Try our live demo!
                </p>
                <img
                  src="/images/arrow.svg"
                  alt="Arrow"
                  className="w-[121px] h-[121px] rotate-190"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScritchesWorks;