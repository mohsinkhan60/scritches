import React from "react";

const Header: React.FC = () => {
  return (
    <header className="relative mt-0 md:mt-20">
      <img
        src="/images/dog.avif"
        alt="Happy dog illustration"
        className="absolute -bottom-5 hidden lg:flex left-20 md:left-24 xl:left-54 w-32 md:w-40 lg:w-52 z-10 pointer-events-none"
      />
      <img
        src="/images/dog-ball.avif"
        alt="Playful cat illustration"
        className="absolute -bottom-20 md:-bottom-24 lg:-bottom-[110px] hidden lg:flex -right-8 md:-right-6 lg:-right-10 xl:right-4 2xl:right-10 w-32 md:w-40 lg:w-116 xl:w-125 z-10 pointer-events-none"
      />
      <div className="flex justify-center h-[150px] absolute -bottom-6 w-full z-10 pointer-events-none">
        <img
          src="/images/dog-ball.avif"
          alt="Playful cat illustration"
          className="lg:hidden flex w-md object-cover pointer-events-none"
        />
      </div>
      <div className="relative mb-10 sm:mb-16 md:mb-20 bg-[#FBF7F4] rounded-3xl sm:rounded-[40px] md:rounded-[46px] max-width-full my-2 mx-0 md:mx-[68px] overflow-hidden">
        <img
          src="/images/shadow.avif"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
        />
        <div className="mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-[70px] text-center relative z-40">
          {/* Title */}
          <h1 className="font-urbanist font-bold py-10 md:py-0 tracking-tight mt-3 text-4xl sm:text-4xl md:text-5xl lg:text-[64px] w-full text-[#333333] mx-auto">
            <div className="mb-2 sm:mb-3">The Better Way to</div>
            <div className="mb-2 sm:mb-3">Manage Your Pet</div>
            <div>Care Business</div>
          </h1>

          <img
            src="/images/check.svg"
            alt="Decorative underline"
            className="mx-auto w-[85%] sm:w-[75%] md:w-[70%] max-w-[370px] hidden lg:flex"
          />
          <p className="text-[#566675]  md:max-w-md text-xl font-bold max-w-[20rem] mx-auto px-2 sm:px-0">
            Scritches is your partner in transforming your solo pet sitting or
            dog walking business from <strong>side hustle</strong> to
            <strong>full-time success</strong>.
          </p>

          <div className="flex relative my-5 md:mb-0 flex-col items-center justify-center">
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-8 mb-18 lg:mb-0">
              <p className="text-[#475466] text-sm sm:text-base md:text-[15px] font-semibold flex text-center justify-center">
                Join 300+ petpreneurs already <br className="hidden sm:block" />
                growing their business
              </p>

              <button className="relative z-50 px-6 sm:px-6 py-2.5 sm:py-2 rounded-full cursor-pointer pointer-events-auto text-white text-base sm:text-lg font-medium font-urbanist bg-[#53A57D] hover:bg-[#44986f] transition-all shadow-md hover:shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none">
                Start for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
