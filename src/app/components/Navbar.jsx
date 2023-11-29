"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Calculate",
    path: "#calculate",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-slate-50 bg-opacity-100 md:px-8">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl text-black font-semibold"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <div className=" flex gap-1">
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-700 text-slate-700 hover:text-slate-500 hover:border-slate-500"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
            <select className=" p-1 bg-inherit text-black border cursor-pointer border-slate-500 rounded-md hover:border-slate-300">
              <option>Amh</option>
              <option>eng</option>
        </select>
            </div>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded  border-slate-700 text-slate-700 hover:text-slate-500 hover:border-slate-500"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
            <select className=" p-1 bg-inherit text-black border cursor-pointer border-slate-500 rounded-md hover:border-slate-300">
              <option>Amh</option>
              <option>eng</option>
        </select>
            </li>
          </ul>
        </div>
        
      </div>
      {navbarOpen ? <div><MenuOverlay links={navLinks} /> </div>: null}
    </nav>
  );
};

export default Navbar;
