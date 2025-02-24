"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import { MdLogout } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import AuthButton from "../ui/AuthButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "TUITION JOBS", href: "#" },
    { name: "PREMIUM TUTORS", href: "#" },
    { name: "TUTOR REQUEST", href: "#" },
    { name: "COURSES", href: "https://course.tutorsheba.com/" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] animate-gradient">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative">
            <Image src={logo} alt="logo" width={180} height={58} className="" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center space-x-12">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm  text-white font-bold "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Register/Login Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <AuthButton href={"/auth/register"}>
              <MdLogout className="text-lg" />
              <span className="text-lg">Register</span>
            </AuthButton>
            <AuthButton href={"/auth/login"}>
              <MdLogin className="text-lg" />
              <span className="text-lg">Login</span>
            </AuthButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col items-center px-2 pb-3 pt-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex space-x-2 px-3">
                <AuthButton href={"/auth/register"}>
                  <MdLogout className="text-lg" />
                  <span className="text-lg">Register</span>
                </AuthButton>
                <AuthButton href={"/auth/login"}>
                  <MdLogin className="text-lg" />
                  <span className="text-lg">Login</span>
                </AuthButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
