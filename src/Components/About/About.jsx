import React from "react";
import img1 from "./about/star.png";
import img2 from "./about/blub.png";
import img3 from "./about/cup.png";
import img4 from "./about/fuse.png";

const About = () => {
  const cards = [
    {
      title: "CIB on the Mobile		",
      src: img1,
      btn: "LEARN MORE",
      paragraph:"Take your client onboard seamlessly by our amazingtool of digital onboard process.",
    },
    {
      title: "CIB on the Mobile",
      src: img2,
      btn: "LEARN MORE",
      paragraph:"Take your client onboard seamlessly by our amazingtool of digital onboard process.",
     
    },
    {
      title: "CIB on the Mobile",
      src: img3,
      btn: "LEARN MORE",
      paragraph:"Take your client onboard seamlessly by our amazingtool of digital onboard process.",
    
    },
    {
      title: "CIB on the Mobile",
      src: img4,
      btn: "LEARN MORE",
      paragraph:"Take your client onboard seamlessly by our amazingtool of digital onboard process.",
    },
  ];
  return (
    <div className="md:px-52 px-8  pb-10  bg-black  text-white " id="about">
      <h1 className="text-4xl font-semibold">Work Experience</h1>
      <div className="flex flex-wrap w-fit justify-center items-center gap-6 py-4 ">
        {cards.map((cards, index) => {
          return (
         
          <div key={index} className=" ">
            <div className=" mx-auto rounded-md min-h-56 p-2 border-t-2 space-y-4 border-t-[#4F228D] flex md:flex-row flex-col gap-2 items-center  bg-gradient-to-br from-[#130428] via-[#251043] via-[#261045] via-[#190634] to-[#38126D] hover:scale-105 duration-200 ease-in-out">
             <div> <img src={cards.src} alt="" /></div>
             <div className=" space-y-4">
              <h1 className="font-bold text-2xl">{cards.title}</h1>
              <p className="text-sm">{cards.paragraph}</p>
             <button className="py-1 px-2 rounded-md border-[2px] border-[#4f228d]">{cards.btn}</button>
             </div>

            </div>
          </div>
          
        );
        })}
      </div>
    </div>
  );
};

export default About;
