import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
const Header = () => {
  const [togglevalue, setToggleValue] = useState(false);
  const togglehandler = () => {
    togglevalue ? setToggleValue(false) : setToggleValue(true);
    console.log("click", togglevalue);
  };
  return (
    <header className="bg-white text-black  flex py-4 px-3 justify-between items-center shadow-md fixed w-full shadow-[#eee]  ">
      <div className="logo">
        <h1>Landing page</h1>
      </div>
      <nav className="relative">
        <ul
          className={`capitalize  absolute   bg-white ${
            togglevalue
              ? " -right-3 top-5 w-screen flex-col h-screen items-center "
              : " -right-[30rem] -top-[20rem] "
          }  sm:relative  sm:w-full  sm:top-0 sm:right-0 sm:h-full  sm:flex-row flex items-center`}
        >
          <li className="mx-2 p-2 cursor-pointer hover:text-[#ffb366]">
            {" "}
            <Link href="#Home" onClick={togglehandler}>
              Home
            </Link>
          </li>
          <li className="mx-2 p-2 cursor-pointer hover:text-[#ffb366]">
            <Link href="#services" onClick={togglehandler}>
              services
            </Link>
          </li>
          <li className="mx-2 p-2 cursor-pointer hover:text-[#ffb366]">Team</li>
          <li className="mx-2 p-2 cursor-pointer hover:text-[#ffb366]">
            <Link href="#contact" onClick={togglehandler}>
              Contact
            </Link>
          </li>
        </ul>
        <AiOutlineBars className="sm:hidden " onClick={togglehandler} />
      </nav>
    </header>
  );
};

export default Header;
