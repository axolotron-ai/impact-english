"use client";
import React, { useEffect, useState } from "react";
import data from "./data.json";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
const Testimonials = () => {
  const [num, setNum] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNum(num === data.length - 1 ? 1 : num + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [num]);

  const handleIncrement = () => {
    // if (num < data.length - 2) {
    //   setNum(num + 1);
    // } else {
    //   setNum(1);
    // }
    setNum(num + 1);
  };
  const handleDecrement = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  return (
    <div className="pt-10 overflow-hidden ">
      <main>
        <motion.div  initial={{ opacity: 0, scale: 0.9, x: 0, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }} className="text-center py-5">
          <h1 className="square-peg text-6xl">Testimonials</h1>
          <div className="flex justify-center">
            <p className="max-w-[500px]">
              Here are some testimonials from our students about IMPACT ENGLISH
              Institute
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 0, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="lg:grid hidden grid-cols-3 p-10 gap-5 cursor-pointer"
        >
          <motion.div
            key={num - 2}
            initial={{ opacity: 0, scale: 0.9, x: 40, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
          >
            <section className="bg-white rounded-xl scale-75 shadow-md">
              <img
                src="/tpin.png"
                alt=""
                className="w-[80px] mt-[-30px] ml-[-20px]"
              />
              <div className="px-8 py-4">
                <div className="flex justify-center pb-5">
                  <div className="text-yellow-500 text-2xl flex gap-1.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {num > 1 && (
                    <div
                      className="text-3xl w-[100px] ml-[-60px] p-3 rounded-full bg-zinc-400"
                      onClick={() => handleDecrement()}
                    >
                      <IoIosArrowBack className="" />
                    </div>
                  )}
                  <p>{data[num - 1].testimonial}</p>
                </div>
                <div className="flex justify-end pt-2">
                  <h1 className="font-bold ">-{data[num - 1].name}</h1>
                </div>
              </div>
            </section>
          </motion.div>
          <motion.div
            key={num}
            initial={{ opacity: 0, scale: 0.9, x: 40, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
          >
            <section className="bg-white rounded-xl shadow-md">
              <img
                src="/tpin.png"
                alt=""
                className="w-[80px] mt-[-30px] ml-[-20px]"
              />
              <div className="px-8 py-4">
                <div className="flex justify-center pb-5">
                  <div className="text-yellow-500 text-2xl flex gap-1.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="">
                  <p>{data[num].testimonial}</p>
                </div>
                <div className="flex justify-end pt-2">
                  <h1 className="font-bold ">-{data[num].name}</h1>
                </div>
              </div>
            </section>
          </motion.div>

          {num < data.length - 1 ? (
            <motion.div
              key={num + 2}
              initial={{ opacity: 0, scale: 0.9, x: 40, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
            >
              <section className="bg-white rounded-xl scale-75 shadow-md">
                <img
                  src="/tpin.png"
                  alt=""
                  className="w-[80px] mt-[-30px] ml-[-20px]"
                />
                <div className="px-8 py-4">
                  <div className="flex justify-center pb-5">
                    <div className="text-yellow-500 text-2xl flex gap-1.5">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>{data[num + 1].testimonial}</p>
                    {num < data.length - 1 ? (
                      <div
                        className="text-3xl w-[100px] mr-[-60px] p-3 rounded-full bg-zinc-400"
                        onClick={() => handleIncrement()}
                      >
                        <IoIosArrowForward className="" />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex justify-end pt-2">
                    <h1 className="font-bold ">-{data[num + 1].name}</h1>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            ""
          )}
        </motion.div>
        <section className="lg:hidden py-10 px-5 overflow-x-scroll flex gap-5 snap-start no-scrollbar">
          {data.map((data,index) => {
            return (
              <section
                key={index}
                className="min-[320px]:min-w-[300px] min-w-[360px]"
              >
                <img
                  src="/tpin.png"
                  alt=""
                  className="w-[80px] mt-[-30px] ml-[-30px]"
                />
                <div className="px-8 py-4 pt-10 mt-[-40px] bg-gray-300 rounded-xl">
                  <div className="flex justify-center pb-5">
                    <div className="text-yellow-500 text-2xl flex gap-1.5">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div className="text-sm">
                    <p>{data.testimonial}</p>
                  </div>
                  <div className="flex justify-end pt-2">
                    <h1 className="font-bold ">-{data.name}</h1>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Testimonials;
