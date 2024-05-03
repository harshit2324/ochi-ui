import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen  bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20 overflow-hidden  ">
        <div className=" masker ">
          {" "}
          <h1 className=' uppercase text-7xl leading-[5.5vw]  font-["Founders_Grotesk_x_condensed"] font-bold'>
            we create
          </h1>
        </div>

        <div className=" masker  ">
          <div className="w-fit flex item-end overflow-hidden ">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "9vw" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className=" mr-[1vw] w-[9vw] h-[5.7vw]
            reletive top-[1vw]  rounded-xl  "
            >
              <img
                className=" rounded-md"
                src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                alt=""
              />
            </motion.div>
            <h1 className=' flex uppercase text-7xl leading-[5.5vw]  font-["Founders_Grotesk_x-condensed"] font-bold'>
              <div></div> Eye opning
            </h1>
          </div>{" "}
        </div>
        <div className=" masker ">
          {" "}
          <h1 className=' uppercase text-7xl leading-[5.5vw]  font-["Founders_Grotesk_x-condensed"] font-bold'>
            presentation
          </h1>
        </div>
      </div>

      <div className="border-t-[2px] border-zinc-700 mt-20 flex justify-between items-center  px-20 ">
        {["for public and private compnies", "from the first pitch of ipo"].map(
          (item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
          <div className=" px-5 py-2 border-[2px] border-zinc-500 font-light text-sm capitalize rounded-full mt-3 ">
            {" "}
            start the project
          </div>
          <div className="w-3 h-3  border-zinc-500 ">
            <span>
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
