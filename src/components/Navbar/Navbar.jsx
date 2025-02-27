"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import { MdLogout } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import AuthButton from "../ui/AuthButton";
import { FaBars } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const authMenu = (
    <>
      {user ? (
        <div className="">
          <div className="dropdown dropdown-hover  dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="text-lg font-semibold text-white">
            {user?.name}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
  // Navigation links
  const navLinks = [
    { name: "TUITION JOBS", href: "/tuition-list" },
    { name: "PREMIUM TUTORS", href: "#" },
    { name: "TUTOR REQUEST", href: "#" },
    { name: "COURSES", href: "https://course.tutorsheba.com/" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] animate-gradient">
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
                <span className="relative  before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-blue-600  before:transition-[width] before:duration-400 before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:w-full">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Register/Login Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            {authMenu}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-white text-xl" />
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
                  <span className="relative  before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-blue-600  before:transition-[width] before:duration-400 before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:w-full">
                    {link.name}
                  </span>
                </Link>
              ))}
              <div className="mt-4 flex space-x-2 px-3">{authMenu}</div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
