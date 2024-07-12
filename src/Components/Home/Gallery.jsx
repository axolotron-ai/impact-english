"use client";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const Gallery = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className={show ? "hidden" : "bg-black"}>
        <main className="gallerymain min-h-[100vh] flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 0, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="max-w-[500px] text-center grid gap-5 lg:p-0 px-5"
          >
            <h1 className="font-bold text-white lg:text-3xl text-2xl">
              We have helped hundreds of students achieve 7+ Band Score through
              our dedicated efforts
            </h1>
            <p className="text-white text-[17px] font-extralight px-7">
              most attaining their desired score on their first attempt. As
              proud official partners of IDP, we provide authentic and reliable
              support. Our outstanding results and maximum success rate set us
              apart from any other IELTS institution.
            </p>
            <div
              className=" w-full rounded-xl py-2 text-black font-bold bg-green-400 cursor-pointer"
              onClick={() => setShow(true)}
            >
              <h1>View Gallery</h1>
            </div>
          </motion.div>
        </main>
      </div>
      <main className={show ? "lg:flex hidden overflow-hidden" : "hidden"}>
        <motion.div
          key={show}
          initial={{ opacity: 0, scale: 3, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
        >
          <img src="/gallerylgbg.png" alt="" />
        </motion.div>
      </main>
      {/* <main
        className={show ? "lg:hidden no-scrollbar scrollhost overflow-scroll gap-2 flex p-2" : "hidden scrollhost no-scrollbar"}
      >
      
        <img src="/g0.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g1.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g2.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g3.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g4.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g5.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g6.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g7.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g8.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g9.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g10.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g11.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g12.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g13.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g14.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g15.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g16.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g17.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g18.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g19.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g20.png" alt="" className="h-[200px] rounded-2xl px-2" />
        <img src="/g21.png" alt="" className="h-[200px] rounded-2xl px-2" />

      </main> */}
      <section
        className={
          show
            ? "lg:hidden overflow-hidden w-full my-10 text-center py-5"
            : "hidden"
        }
      >
        <Marquee pauseOnClick >
          <img src="/g0.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g1.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g2.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g3.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g4.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g5.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g6.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g7.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g8.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g9.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g10.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g11.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g12.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g13.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g14.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g15.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g16.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g17.png" alt="" className="h-[200px] rounded-2xl px-2" />
          
          <img src="/g19.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g20.png" alt="" className="h-[200px] rounded-2xl px-2" />
          <img src="/g21.png" alt="" className="h-[200px] rounded-2xl px-2" />
        </Marquee>
      </section>
    </div>
  );
};

export default Gallery;
