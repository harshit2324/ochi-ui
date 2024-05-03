import React from "react";

function Footer() {
  return (
    <div className=" flex gap-5 w-full h-screen bg-zinc-900 p-20 font-['Founders_Grotesk_x-condensed']">
      <div className="w-1/2 h-full flex flex-col justify-between  ">
        <div className="heading">
          <h1 className="text-[8vw] uppercase font-semibold leading-none -mb-5 -">
            EYE-
          </h1>
          <h1 className="text-[8vw] uppercase font-semibold leading-none -mb-5 ">
            OPNING
          </h1>
        </div>
        <h3 className=" uppercase"> ochi. </h3>
      </div>
      <div className="w-1/2 ">
        <h1 className="text-[5vw] uppercase font-semibold leading-none -mb-2 ">
          Prensentation
          <div className="deteails font-['Neue_Montreal']">
            <a className=" block text-xl" href="#">
              fecebook
            </a>
            <a className=" block text-xl" href="#">
              instagram
            </a>
            <a className=" block text-xl" href="#">
              twitter
            </a>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
