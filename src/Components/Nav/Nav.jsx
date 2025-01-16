import React, { useState } from "react";
import logo from "./nav/Logo.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const navLinks = [
    {
      title: "Home",
      id: "1",
      to: "#home",
    },
    {
      title: "About",
      id: "2",
      to: "#about",
    },
    {
      title: "Lab",
      id: "3",
      to: "#lab",
    },
  ];
  return (
    <>
      <nav className="bg-[#1A0B2E] py-4 px-52 md:block hidden">
        <div className="flex justify-between items-center  ">
          <img src={logo} alt="logo" className="w-10 h-10 md:block hidden" />
          <div className=" md:flex gap-20 hidden">
            {navLinks.map((links, id) => {
              return (
                <div key={id} className=" ">
                  <ul>
                    {" "}
                    <div className="text-white font-semibold">
                      <a href={links.to}>{links.title}</a>
                    </div>
                  </ul>{" "}
                </div>
              );
            })}
          </div>
        </div>
  </nav>
        {/* responsive mobile design */}
       <nav className="bg-[#1A0B2E] py-4 px-8 md:hidden  block">
          <div className="flex  justify-between items-center w-full">
            {" "}
            <img src={logo} alt="logo" className="w-10 h-10 block md:hidden" />
            <button className=" text-white md:hidden block" onClick={handleClick}>
              {toggle ? "x" : "v"}
            </button>
          </div>
          {toggle && (
            <div className=" text-center  md:hidden block">
              {navLinks.map((links, id) => {
                return (
                  <div key={id}>
                    <ul>
                      {" "}
                      <div className="text-white font-semibold  py-6">
                        <a href={links.to}>{links.title}</a>
                      </div>
                    </ul>{" "}
                  </div>
                );
              })}
            </div>
          )}{" "}
       </nav>
    </>
  );
};

export default Nav;
