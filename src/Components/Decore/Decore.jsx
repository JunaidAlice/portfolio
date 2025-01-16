import React from "react";
import figma from "./decore/figma.svg";
import react2 from "./decore/react2.svg";
import c from "./decore/c.svg";
import js from "./decore/js.svg";
import css3 from "./decore/css3.svg";
import html from "./decore/html.svg";
import next from "./decore/next.svg";
import express from "./decore/express.svg";
import gg from "./decore/gg.svg";
import redux from "./decore/redux.svg";
import xd2 from "./decore/xd2.svg";
import logo from "../Nav/nav/Logo.png"
import ai2 from "./decore/ai2.svg";
import node from "./decore/node.svg";
import circle1 from "./decore/circle1.svg";
import circle2 from "./decore/circle2.svg";
import circle3 from "./decore/circle3.svg";


const Decore = () => {
  const images = [
    { src: figma },
    { src: c },
    { src: react2 },
    { src: js },
    { src: css3 },
    { src: html },
    { src: next },
  ];
  const image = [
    { img: gg },
    { img: express },
    { img: redux },
    { img: node },
    { img: ai2 },
    { img: xd2 },
  ];

  return (
    <div className="md:px-52 px-8  pb-10  bg-black  text-white ">
      <div className="py-10 text-center"><h1 className="text-4xl font-bold">I'm currently looking to join a <span className="text-[#A362FF]">cross-functional</span> team</h1>
      <p className="font-semibold">that values improving people's lives through accessible design</p></div>
      <div>
        <div className="imageline1   border-white flex justify-center items-center gap-2">
          {images.map((image) => (
            <div className="">
              <img src={image.src} alt="#" />
            </div>
          ))}
        </div>
        <div className="imageline2   border-white flex justify-center items-center gap-2">
          {image.map((image) => (
            <div className="">
              <img src={image.img} alt="#" /> 
            
            </div>
          ))}  <img src={circle1} alt="" className="  absolute " />
        <img src={circle2} alt="" className=" absolute " />
        <img src={circle3} alt="" className=" absolute" />
        </div>
      </div>
      
        <img src={logo} className="w-16 mx-auto py-6" alt="" />
       
      </div>

  );
};

export default Decore;
