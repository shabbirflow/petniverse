"use client";

import constants from "@/bigDAWG.json";
import {
  PawPrint,
  Dog,
  Hotel,
  Info,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  pawPrint: <PawPrint size={23} strokeWidth={3} />,
  dog: <Dog size={23} strokeWidth={3} />,
  hotel: <Hotel size={23} strokeWidth={3} />,
  mail: <Mail size={23} strokeWidth={3} />,
};

const Navbar = () => {
  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      url: constants.contact.facebookURL,
    },
    {
      icon: <Instagram size={18} />,
      url: constants.contact.instaURL,
    },
    {
      icon: <Youtube size={18} />,
      url: constants.contact.youtubeURL,
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {constants.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="gap-2">
                  {iconMap[link.icon]} {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Site Title */}
        <a href="#home" className="btn btn-ghost text-xl text-shadow-yellow-500 text-shadow-xs">
          {constants.siteTitle}
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {constants.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="gap-2 cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105"
              >
                {iconMap[link.icon]} {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End - Social Pills */}
      <div className="navbar-end">
        <div className="flex items-center gap-2 px-4 py-1 rounded-full shadow-sm border-amber-300 border-2">
          {socialLinks.map(({ icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition-transform hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
