"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <header className="relative mb-3 bg-[#FBF7F4] rounded-[46px] max-width-full my-2 mx-[72px] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 from-[#fbf8f4] to-[#fdfaf6] -z-10"></div>
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-[#faefe2] opacity-50 blur-3xl rounded-full -z-10"></div>

      {/* Main container */}
      <div className="max-w-[540px] mx-auto px-6 py-24 md:py-10 text-center relative">
        {/* Badge */}
        <a
          className="inline-flex items-center gap-2 bg-[#BADBCB] text-[#1c4a35] font-semibold text-sm px-2 py-1.5 rounded-full mb-4 shadow-sm transition-all hover:bg-[#c8eedb]"
        >
          <button className="bg-[#53A57D] text-[#193125] px-3 text-[16px] rounded-full font-semibold">
            updates
          </button>
          <span>💸</span>
          <span className="flex text-[#193125] text-[16px] items-center gap-1">
            Get our early adopter discount now
            {/* transition-transform group-hover:translate-x-1 */}
            <FiArrowRight />
          </span>
        </a>

        {/* Title */}
        <h1 className="font-urbanist font-extrabold text-4xl sm:text-5xl md:text-[60px] text-[#333333] leading-[1.22]">
          The Better Way to <br /> Manage Your Pet <br /> Care Business
        </h1>

        {/* Subtitle */}

        {/* Decorative line */}
        <img
          src="/images/check.svg"
          alt="Decorative underline"
          className="mx-auto w-[70%] max-w-[480px]"
        />
        <p className="text-[#5a6b7b] text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Scritches is your partner in transforming your solo <br /> pet sitting or dog
          walking business from <strong>side <br /> hustle</strong> to{" "}
          <strong>full-time success</strong>.
        </p>

        {/* CTA */}
        <div className="mt-4 flex flex-row justify-center items-center gap-3">
          <p className="text-[#5a6b7b] text-sm md:text-base font-medium">
            Join <strong>300+ petpreneurs</strong> already <br /> growing their
            business
          </p>

          <a
            href="https://app.scritches.io/auth/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full text-white text-lg font-medium font-urbanist bg-[#53a57d] cursor-pointer hover:bg-[#44986f] transition-all shadow-md hover:shadow-lg"
          >
            Start for free
          </a>
        </div>

        {/* Corner Illustrations */}
      </div>
      <img
        src="/images/dog.avif"
        alt="Happy dog illustration"
        className="absolute -bottom-5 left-32 w-28 md:w-52"
      />
      <img
        src="/images/dog-ball.avif"
        alt="Playful cat illustration"
        className="absolute bottom-0 right-4 w-28 md:w-36"
      />
    </header>
  );
};

export default Header;
