"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <header className="relative mt-24">
      <img
        src="/images/dog.avif"
        alt="Happy dog illustration"
        className="absolute -bottom-5 hidden lg:flex left-20 md:left-24 xl:left-54 w-32 md:w-40 lg:w-52 z-20"
      />
      <img
        src="/images/dog-ball.avif"
        alt="Playful cat illustration"
        className="absolute -bottom-20 md:-bottom-24 lg:-bottom-[110px] hidden lg:flex -right-8 md:-right-6 lg:-right-10 xl:right-4 2xl:right-10 w-32 md:w-40 lg:w-116 xl:w-125 z-20"
      />
      <div className="flex justify-center h-[150px] z-50 absolute -bottom-6 w-full">
        <img
          src="/images/dog-ball.avif"
          alt="Playful cat illustration"
          className="lg:hidden flex w-md object-cover "
        />
      </div>
      <div className="relative mb-10 sm:mb-16 md:mb-20 bg-[#FBF7F4] rounded-3xl sm:rounded-[40px] md:rounded-[46px] max-width-full my-2 mx-0 md:mx-[68px] overflow-hidden z-10">
        <div className="mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-10 text-center relative">
          {/* Badge */}
          <a className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 bg-[#BADBCB] text-[#1c4a35] font-semibold text-xs sm:text-sm px-2 py-1.5 rounded-full mb-4 shadow-sm transition-all hover:bg-[#c8eedb]">
            <button className="bg-[#53A57D] text-[#193125] px-2 sm:px-3 text-sm sm:text-[16px] rounded-full font-semibold">
              updates
            </button>
            <span>💸</span>
            <span className="flex text-[#193125] text-xs sm:text-sm md:text-[16px] items-center gap-1">
              <span className="hidden sm:inline">
                Get our early adopter discount now
              </span>
              <span className="sm:hidden">Early adopter discount</span>
              {/* transition-transform group-hover:translate-x-1 */}
              <FiArrowRight />
            </span>
          </a>

          {/* Title */}
          <h1 className="font-urbanist font-bold tracking-tight text-4xl sm:text-4xl md:text-5xl lg:text-[66px] w-full text-[#333333] mx-auto">
            <div className="mb-2 sm:mb-3">The Better Way to</div>
            <div className="mb-2 sm:mb-3">Manage Your Pet</div>
            <div>Care Business</div>
          </h1>

          {/* Subtitle */}

          {/* Decorative line */}
          <img
            src="/images/check.svg"
            alt="Decorative underline"
            className="mx-auto w-[85%] sm:w-[75%] md:w-[70%] max-w-[480px] hidden lg:flex"
          />
          <p className="text-[#5a6b7b] md:max-w-md text-xl font-semibold max-w-[20rem] mx-auto px-2 sm:px-0">
            Scritches is your partner in transforming your solo pet sitting or
            dog walking business from <strong>side hustle</strong> to{" "}
            <strong>full-time success</strong>.
          </p>

          {/* CTA */}
          <div className="flex relative flex-col items-center -gap-20 justify-center">
            <div className="mt-4 flex flex-col-reverse sm:flex-row justify-center items-center gap-3 mb-18 lg:mb-0">
              <p className="text-[#5a6b7b] text-sm sm:text-base md:text-lg font-semibold text-center sm:text-left">
                Join 300+ petpreneurs already <br className="hidden sm:block" />{" "}
                growing their business
              </p>

              <a
                href="https://app.scritches.io/auth/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white text-base sm:text-lg font-medium font-urbanist bg-[#53A57D] hover:bg-[#44986f] transition-all shadow-md hover:shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                Start for free
              </a>
            </div>
          </div>

          {/* Corner Illustrations */}
        </div>
        <div className="absolute bg-[#FBF3E7] h-165 rounded-full -z-1 -top-1/2 -left-1/8 max-md:w-28 md:aspect-square overflow-hidden pointer-events-none" />
        <div className="absolute bg-[#FBF3E7] h-104 rounded-full -z-1 -bottom-32 -right-10 w-28 md:w-[410px] overflow-hidden pointer-events-none" />
      </div>
    </header>
  );
};

export default Header;
