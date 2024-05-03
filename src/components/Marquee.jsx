import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      className="w-full py-8 h-[50vh] rounded-3xl mt-10  bg-[#004D43] pb-7 "
    >
      <div className=" text border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[15vw]  leading-none font-['Founders_Grotesk_x-Condensed'] font-semibold uppercase pt-10  "
        >
          we are ochi
        </motion.h1>

        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[15vw] leading-none  font-['Founders_Grotesk_x-Condensed'] font-semibold uppercase pt-10 "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
