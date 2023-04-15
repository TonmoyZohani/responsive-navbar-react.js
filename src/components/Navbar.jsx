import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4 md:px-10 px-7 md:justify-between md:items-center">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="bicycle-outline"></ion-icon>
          </span>
          Designer
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 md:hidden cursor-pointer"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center text-xl md:space-x-4 md:space-y-0 space-y-4 md:z-auto z-[-1] absolute
         md:py-0 my-2 md:static bg-white md:pl-0 left-0 w-full pl-16 md:w-auto
          transition-all duration-300 ease-in ${
            open ? "top-18 opacity-500" : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          {Links.map((link) => {
            return (
              <li className="">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-300"
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
