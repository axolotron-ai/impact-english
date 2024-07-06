"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="">
      <div className="overflow-hidden">
        <div className="flex items-center justify-center pt-[150px] py-20 mt-10 min-h-[85vh]">
          <main className="grid lg:grid-cols-2">
            <section className=" px-[30px] lg:px-[100px] flex items-center justify-center ">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -100, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className=""
              >
                <div className="staatliches ">
                  <h1 className="text-4xl">
                    Exclusive <span className="text-red-500">IELTS</span>{" "}
                    preparation course with expert guidance & support
                  </h1>
                </div>
                <div className="lg:text-2xl text-xl pt-5">
                  <p>
                    At Impact English, we go beyond textbooks, focusing on
                    real-world English for IELTS success. Our tailored resources
                    ensure confident progress without overwhelm.
                  </p>
                </div>
                <div className="py-8">
                  <a
                    href="/#about"
                    className="px-4 py-2 rounded-xl border-2 border-black text-xl font-semibold hover:shadow-md hover:bg-green-400 hover:text-white duration-100 hover:border-none"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            </section>
            <section className=" pt-[100px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 10, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className="relative z-[5]"
              >
                <div className="flex gap-2 p-5 rounded-xl shadow-md max-w-[220px] mb-[-340px] bg-white relative z-[4] lg:ml-[50px] scale-75 ml-[-20px] lg:scale-100">
                  <div className="">
                    <img
                      src="/rimg.png"
                      alt=""
                      className="w-[100px] my-auto "
                    />
                  </div>
                  <div className="">
                    <h1 className="font-bold">Gehna Bulani</h1>
                    <p className="opacity-60">TEFL Certified Teacher</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 100, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className="flex flex-col justify-center"
              >
                <div className="">
                  <img
                    src="/bluebg.png"
                    alt=""
                    className="mx-auto lg:mb-[-400px] mb-[-550px] lg:mt-0  z-[0] w-[500px] hidden lg:block"
                  />
                  <img
                    src="/heroimg.png"
                    alt=""
                    className=" object-cover lg:w-[450px] w-[300px] m-auto z-[1] mt-[150px] lg:mt-0"
                  />
                  <img
                    src="/dots.png"
                    alt=""
                    className="lg:mt-[-480px] mt-[-500px] w-[600px] m-auto z-[3] relative"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 0, y: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
              >
                <div className="flex justify-end lg:mt-[-120px] mt-10 scale-75 lg:scale-100 mr-[-30px] lg:mr-0 lg:pr-[100px] z-[4]">
                  <div className="bg-white p-5 rounded-xl shadow-md w-fit">
                    <div className="text-2xl font-bold text-black text-center">
                      <CountUp end={500} duration={5} />+
                    </div>
                    <p className="opacity-60">Successful Students</p>
                  </div>
                </div>
              </motion.div>
            </section>
          </main>
        </div>
        <main className="bg-black text-white lg:mt-0 mt-[120px]">
          <section className=" overflow-hidden w-full my-10 text-center py-5">
            <Marquee>
              <div className="px-[70px] py-5">
                <h1 className="font-bold text-2xl montserrat">GENERAL IELTS</h1>
                <p className="opacity-60">Coaching</p>
              </div>
              <div className="px-[70px] py-5">
                <h1 className="font-bold text-2xl montserrat">
                  ACADEMIC IELTS
                </h1>
                <p className="opacity-60">Coaching</p>
              </div>
              <div className="px-[70px] py-5">
                <h1 className="font-bold text-2xl montserrat">SPOKEN IELTS</h1>
                <p className="opacity-60">Coaching</p>
              </div>
              <div className="px-[70px] py-5">
                <h1 className="font-bold text-2xl montserrat">GENERAL IELTS</h1>
                <p className="opacity-60">Coaching</p>
              </div>
              <div className="px-[70px] py-5">
                <h1 className="font-bold text-2xl montserrat">
                  ACADEMIC IELTS
                </h1>
                <p className="opacity-60">Coaching</p>
              </div>
              <div className="px-[70px] py-5">
                <h1 className="font-bold text-2xl montserrat">SPOKEN IELTS</h1>
                <p className="opacity-60">Coaching</p>
              </div>
              <div className="px-[70px] py-5">
                <h1 className="font-bold text-2xl montserrat">GENERAL IELTS</h1>
                <p className="opacity-60">Coaching</p>
              </div>
              <div className="px-[70px] py-5">
                <h1 className="font-bold text-2xl montserrat">
                  ACADEMIC IELTS
                </h1>
                <p className="opacity-60">Coaching</p>
              </div>
              <div className="px-[70px] py-5">
                <h1 className="font-bold text-2xl montserrat">SPOKEN IELTS</h1>
                <p className="opacity-60">Coaching</p>
              </div>
            </Marquee>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Hero;
