"use client";

const ScritchesWorks = () => {
  const features = [
    {
      icon: (
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
          className="lucide lucide-info-icon lucide-info"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      ),
      title: "Allow booking 24/7, even when you're with pets",
    },
    {
      icon: (
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
          className="lucide lucide-package-icon lucide-package"
        >
          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
          <path d="M12 22V12" />
          <polyline points="3.29 7 12 12 20.71 7" />
          <path d="m7.5 4.27 9 5.15" />
        </svg>
      ),
      title: "Attract new clients you couldn't connect with before",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      ),
      title: "Eliminate back-and-forth coordination",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
      ),
      title: "Enhance your professional image with a polished system",
    },
  ];

  return (
    <div className="min-h-screen py-1 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-20">
        <span className="inline-block bg-[#53A57D] text-white text-[13px] font-semibold px-4 py-1 rounded-xl mb-6">
          BENEFITS
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
          Scritches Works for You
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-width-full md:mx-[38px] mx-auto">
        <div className="gap-6 lg:gap-8 flex items-center justify-center">
          {/* Left Section - Content */}
          <div className="lg:col-span-1 flex-1 space-y-6">
            <div>
              <h2 className=" leading-tight text-3xl sm:text-4xl lg:text-[55px] font-bold text-slate-950 mb-4">
                Better Bookings, Better Business
              </h2>
              <p className="text-[#686767] font-medium sm:text-xl">
                With Scritches, online booking is a breeze for you and your
                clients. They can request services anytime, anywhere, making it
                easier than ever to connect with new clients.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-[#F8FAFC] rounded-xl border border-gray-200"
                >
                  <div className="shrink-0 w-11 h-11 bg-primary text-white rounded-lg flex items-center justify-center text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-medium text-[#242424] text-md">
                      {feature.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Section - Calendar and Booking */}
          <div className="lg:col-span-1 flex-1">
            <div className="relative w-full max-w-2xl">
              {/* Background shadow */}
              <img
                className="w-full h-[37rem] rounded-3xl"
                src="/images/shadow.avif"
                alt="Background shadow"
              />
              {/* Calendar overlay */}
              <div className="absolute -rotate-12 -top-1 -left-10">
                <img
                  src="/images/calander.avif"
                  alt="Calendar view"
                  className="w-full h-[25rem] object-contain rounded-2xl shadow-2xl"
                />
              </div>
              {/* Booking summary overlay */}
              <div className="absolute -bottom-10 -right-1 z-20">
                <img
                  src="/images/bookingSummary.avif"
                  alt="Booking summary"
                  className="w-full h-[30rem] object-contain rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute bottom-25 rotate-3 right-78 z-50">
                <button
                  className="w-full font-bold bg-primary text-white py-4 px-24 rounded-2xl shadow-2xl rounded-full"
                >Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScritchesWorks;
