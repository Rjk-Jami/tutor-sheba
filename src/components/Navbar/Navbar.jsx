"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import { MdLogout } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import AuthButton from "../ui/AuthButton";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authButton = (
    <>
      
      <AuthButton href={"/auth/register"}>
        <MdLogout className="text-lg" />
        <span className="text-lg">Register</span>
      </AuthButton>
      <AuthButton className={"bg-[#800080]"} href={"/auth/login"}>
        <MdLogin className="text-lg" />
        <span className="text-lg">Login</span>
      </AuthButton>
    </>
  );
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
            {authButton}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            
            <FaBars className="text-white text-xl"/>
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
                {authButton}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
