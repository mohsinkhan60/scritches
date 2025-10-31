"use client";
import { useState, useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape and manage focus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Close when clicking outside the mobile menu
  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      if (!isOpen) return;
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [isOpen]);

  // Lock scroll when mobile menu is open and focus close button
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = prev;
    }
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg rounded-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/navbar-pet.avif"
            alt="Scritches — happy pet logo"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <span className="font-semibold text-lg text-gray-800">Scritches</span>
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

        {/* CTA */}
        <div className="hidden md:flex">
          <button className="flex items-center gap-2 bg-green-600 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-green-700 transition">
            Start for Free <FiArrowUpRight />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleOpen}
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-2xl text-gray-800 p-2 rounded-md hover:bg-gray-100"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-0 z-50 flex flex-col bg-white p-6 animate-slide-in"
          aria-modal="true"
          role="dialog"
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
              <span className="font-semibold text-lg">Scritches</span>
            </div>
            <button
              ref={closeBtnRef}
              onClick={handleClose}
              aria-label="Close menu"
              className="text-2xl p-2 rounded-md hover:bg-gray-100"
            >
              <HiX />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-start space-y-6 text-lg font-medium text-gray-700">
            <button
              onClick={handleClose}
              className="flex items-center space-x-1 hover:text-green-700"
            >
              <span>Scritches For</span>
              <span aria-hidden>▾</span>
            </button>
            <a href="#" onClick={handleClose}>
              Pricing
            </a>
            <a href="#" onClick={handleClose}>
              Blog
            </a>
            <a href="#" onClick={handleClose}>
              Product Updates
            </a>
            <a href="#" onClick={handleClose}>
              Terms &amp; Conditions
            </a>
            <a href="#" onClick={handleClose}>
              Privacy Policy
            </a>
            <button
              onClick={handleClose}
              className="flex items-center space-x-1 hover:text-green-700"
            >
              <span>Solutions</span>
              <span aria-hidden>▾</span>
            </button>
          </div>

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
