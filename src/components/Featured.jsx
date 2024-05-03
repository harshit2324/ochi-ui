import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap";
function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handlehover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handlehoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 bg-black ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className=" text-7xl font-['Neue_Montreal'] leading-[4vw] text-[4vw] tracking-tight ">
          Featured project
        </h1>
        <div className=" px-20">
          <div className="card w-full  flex gap-10 mt-10 ">
            <motion.div
              onHoverStart={() => handlehover(0)}
              onHoverEnd={() => handlehoverEnd(0)}
              className=" cardcontainer relative card rounded-lg w-1/2 h-[80vh]  "
            >
              <div className=" absolute flex overflow-hidden text-[#CDEA68]  left-full -translate-x-1/2 translate-y-1/2  top-1/2  leading-none tracking-tighter z-[9] text-6xl">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.5, 0, 0.75, 0],
                      delay: index * 0.01,
                    }}
                    className=" inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              <div className=" card w-full h-full rounded-xl overflow-hidden">
                <img
                  className=" w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                  alt=""
                />
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handlehover(1)}
              onHoverEnd={() => handlehoverEnd(1)}
              className=" cardcontainer relative  w-1/2 h-[80vh] "
            >
              <h1 className=" absolute flex overflow-hidden  text-[#CDEA68]  right-full translate-x-1/2 translate-y-1/2  top-1/2  leading-none tracking-tighter z-[9] text-6xl">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    className=" inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className=" card w-full h-full rounded-xl overflow-hidden">
                <img
                  className=" w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
