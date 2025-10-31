"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open menu
  const handleOpen = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsClosing(false);
    setIsOpen(true);
  }, []);

  // Close menu with animation
  const handleClose = useCallback(() => {
    setIsClosing(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      timeoutRef.current = null;
    }, 200) as unknown as number;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Accessibility + scroll lock when mobile menu open
  useEffect(() => {
    if (!isOpen) return;

    // focus the close button once open
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
      if (e.key === "Tab") {
        const container = menuRef.current;
        if (!container) return;
        const focusable = Array.from(
          container.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute("disabled"));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, handleClose]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`
        fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
        ${isScrolled
          ? "w-[90%] md:w-[899px] mt-2 bg-white/95 shadow-lg rounded-full"
          : "w-[90%] md:w-[1027px] bg-transparent rounded-full"}
      `}
    >
      <div className={`flex items-center justify-between px-4 sm:px-6 ${
        isScrolled ? "py-3" : "py-5"
      }`}>
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/navbar-pet.avif"
            alt="Scritches — happy pet logo"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />
          <span className="font-medium pt-1.5 text-[#494949] text-[20px]">
            Scritches
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700">
          <button className="flex items-center space-x-1 hover:text-green-700 focus:outline-none">
            <span>Solutions</span>
            <span aria-hidden>▾</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-700 focus:outline-none">
            <span>Scritches For</span>
            <span aria-hidden>▾</span>
          </button>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-green-700">
            Pricing
          </a>
          <a href="#" className="hover:text-green-700">
            Blog
          </a>
          <button className="flex items-center space-x-1 hover:text-green-700 focus:outline-none">
            <span>More</span>
            <span aria-hidden>▾</span>
          </button>
        </div>

        {/* CTA (Desktop) */}
        <div className="hidden md:flex">
          <button className="flex items-center gap-2 bg-green-600 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-green-700 transition">
            Start for Free <FiArrowUpRight />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={handleOpen}
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-3xl text-gray-800 p-2 rounded-md hover:bg-gray-100"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`fixed inset-0 z-50 flex flex-col bg-white p-6 transition-transform duration-200 ease-in-out
            ${isClosing ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <img
                src="/images/navbar-pet.avif"
                alt="Scritches — happy pet logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="font-semibold text-lg text-gray-800">
                Scritches
              </span>
            </div>
            <button
              ref={closeBtnRef}
              onClick={handleClose}
              aria-label="Close menu"
              className="text-3xl p-2 rounded-md hover:bg-gray-100"
            >
              <HiX />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-start space-y-6 text-lg font-medium text-gray-700">
            <button
              onClick={handleClose}
              className="flex items-center space-x-1 hover:text-green-700"
            >
              <span>Scritches For</span>
              <span aria-hidden>▾</span>
            </button>
            <a href="#" onClick={handleClose}>Pricing</a>
            <a href="#" onClick={handleClose}>Blog</a>
            <a href="#" onClick={handleClose}>Product Updates</a>
            <a href="#" onClick={handleClose}>Terms &amp; Conditions</a>
            <a href="#" onClick={handleClose}>Privacy Policy</a>
            <button
              onClick={handleClose}
              className="flex items-center space-x-1 hover:text-green-700"
            >
              <span>Solutions</span>
              <span aria-hidden>▾</span>
            </button>
          </nav>

          <div className="mt-6">
            <button
              onClick={handleClose}
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded-full hover:bg-green-700 transition"
            >
              Start for Free <FiArrowUpRight />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
