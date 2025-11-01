import { BsChevronDown } from "react-icons/bs";
import { navbarLinks } from "../constants/navbar";
import { LuArrowUpRight } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className=" items-center justify-between p-3 lg:p-3 max-w-[1015px] mx-auto rounded-full md:flex hidden">
      <div className="flex items-center gap-3">
        <img
          src="/images/navbar-pet.avif"
          alt="Scritches logo"
          className="lg:w-[45px] w-8 rounded-full object-cover"
        />
        <span className="font-semibold text-xl text-[#494949]">Scritches</span>
      </div>

      <ul className="flex items-center justify-between gap-5 2xl:gap-8 text-lg">
        {navbarLinks.map((link) => (
          <li
            key={link.name}
            className="flex items-center gap-2 relative group cursor-pointer"
          >
            <p
              className={`font-medium ${
                link.name === "Price" || link.name === "Blog"
                  ? "text-black"
                  : "text-black/60"
              } ${link.name === "More" && "2xl:block hidden"}`}
            >
              {link.name}
            </p>
            {link.subLinks && (
              <BsChevronDown
                className={`size-4 text-primary ${
                  link.name === "More" && "2xl:block hidden"
                }`}
              />
            )}
            {link.name === "Scritches For" && (
              <div className="w-[1.5px] h-4 bg-black/50 ml-5 2xl:block hidden"></div>
            )}

            {link.subLinks && (
              <ul className="absolute top-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-7 py-6 text-lg whitespace-nowrap group-hover:flex flex-col gap-1.5 hidden shadow-xl shadow-black/5">
                {link.subLinks?.map((link) => (
                  <li key={link.name}>
                    <p>{link.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div>
        <button className="bg-primary text-white cursor-pointer font-semibold rounded-[1.2rem] group transition-all px-8 border border-black py-2 flex items-center gap-2">
          Start for Free{" "}
          <div className="relative transition-all duration-500">
            <LuArrowUpRight className="opacity-0 size-5" />
            <LuArrowUpRight className="size-5 absolute transition-all duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[84%] group-hover:-translate-x-[20%]" />
            <LuArrowUpRight className="size-5 absolute transition-all duration-500 opacity-0 right-full group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
