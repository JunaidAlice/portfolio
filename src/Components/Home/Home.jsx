import React from "react";
import profile from "./home/unnamed.jpg";
import arrow from "./home/Arrow.png";
// import gradient from './home/Gradient.png'
// import ellipse from './home/Ellipse.png'
const Home = () => {
  return (
    <div className="md:px-52 px-8 md:py-44 py-32  bg-black " id="home">
      <div className="flex md:flex-row flex-col justify-center">
        <div className="  ">
          <div className="relative ">
            <h1 className=" text-white absolute -bottom-[16px] md:bottom-[70px] md:-right-56 ">
              Hello! I Am <span className="text-[#7127BA]">Masked wolf</span>
            </h1>
            <img
              src={arrow}
              alt="arrow"
              className=" absolute -bottom-2 -right-10 md:block hidden"
            />
          </div>
          <div className="relative ">
            <div className="absolute blur-3xl p-32 top-0  rounded-full md:block hidden  bg-[#7127BA]"></div>
            <img
              src={profile}
              alt="profile "
              className="relative rounded-full border-b-4 border-[#8e37e6] md:-bottom-8 md:-left-5 md:ml-16 w-44 mx-auto "
            />
          </div>
        </div>
        <div className="text-white  flex flex-col justify-center relative md:text-start text-center md:pl-20  ">
          <h1 className="font-semibold">A Developer who</h1>

          <h1 className="font-semibold text-5xl leading-relaxed ">
            Judges a book
         
            by its <span className=""> cover...</span>
          </h1>
          <p className="font-semibold">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
      <div
        className="relative pt-20 text-white 
     text-center "
      >
        <h1 className="text-4xl font-semibold">I'm a Software Engineer.| </h1>
        <p>Currently, I'm a Software Engineer at Facebook,</p>
        <div className="pt-12">
          <p className="text-white md:w-[60%] mx-auto">
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
      <div className="w-[90%] border border-[#7127ba] rounded-full md:block hidden mx-auto "></div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
