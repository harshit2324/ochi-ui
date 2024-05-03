import React from "react";

function About() {
  return (
    <div className=" w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-4xl text-black ">
      <h1 className="font-['Neue_Montreal'] leading-[4vw] text-[4vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className=" w-full flex gap-5 pt-10 mt-20 border-t-[1px] border-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-7xl"> our approach: </h1>
          <button className=" flex gap-10 px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white items-center uppercase">
            read more
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className=" w-1/2 h-[70vh] flex rounded-3xl">
          <img
            className=" rounded-md"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
