import React from "react";

function Cards() {
  return (
    <div className=" w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[70vh] w-1/2 bg-[#004D43]">
        <div className="card relative rounded-xl w-full justify-center flex items-center h-full bg-[#004D43] ">
          <img
            className="W-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className=" px-5 py-1 border-2 rounded-full absolute left-10 bottom-10 ">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[70vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#083b34] ">
          <img
            className="W-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className=" px-5 py-1 border-2 rounded-full absolute left-3 bottom-10 ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#083b34]  ">
          <img
            className="W-32 h-20"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className=" px-5 py-1 border-2 rounded-full absolute left-0 bottom-5 ">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
