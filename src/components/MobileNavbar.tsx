import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import { mobileNavbarLinks } from "../constants/navbar";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col gap-10 z-50 max-w-5xl transition-all duration-500 fixed top-2 left-1/2 -translate-x-1/2 w-[98%] bg-white overflow-hidden mx-auto px-5 py-3 rounded-2xl md:hidden ${
        isOpen ? "h-[553px]" : "h-[50px]"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <img
            src="/images/navbar-pet.avif"
            alt="Scritches logo"
            className="w-7 rounded-full object-cover"
          />
          <span className="font-semibold text-xl text-[#494949]">
            Scritches
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-0.5 justify-center items-center cursor-pointer"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-0.5"
                    }`}
          ></span>
        </button>
      </div>

      <ul className="flex items-center justify-between flex-col gap-6 text-lg">
        {mobileNavbarLinks.map((link) => (
          <li
            key={link.name}
            className="flex items-center gap-2 relative group cursor-pointer"
          >
            <p
              className={`font-medium ${
                link.name === "Price" || link.name === "Blog"
                  ? "text-black"
                  : "text-black/80"
              }`}
            >
              {link.name}
            </p>
            {link.subLinks && (
              <BsChevronDown
                className={`size-4  ${
                  link.name === "More" && "2xl:block hidden"
                }`}
              />
            )}
            {link.name === "Scritches For" && (
              <div className="w-[1.5px] h-4 bg-black/50 ml-5 2xl:block hidden"></div>
            )}

            {link.subLinks && (
              <ul className="absolute top-10 z-50 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-7 py-6 text-lg whitespace-nowrap group-hover:flex flex-col gap-1.5 hidden shadow-xl shadow-black/5">
                {link.subLinks?.map((link) => (
                  <li key={link.name}>
                    <p>{link.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <button className="bg-primary mt-5 text-base text-white cursor-pointer font-semibold rounded-[1.2rem] group transition-all px-7 border border-black py-2 w-fit flex items-center gap-2">
          Start for Free{" "}
          <div className="relative transition-all duration-500">
            <LuArrowUpRight className="opacity-0 size-5" />
            <LuArrowUpRight className="size-5 absolute transition-all duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[84%] group-hover:-translate-x-[20%]" />
            <LuArrowUpRight className="size-5 absolute transition-all duration-500 opacity-0 right-full group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2" />
          </div>
        </button>
      </ul>
    </div>
  );
};

export default MobileNavbar;
