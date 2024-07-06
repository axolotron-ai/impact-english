"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Courses = () => {
  return (
    <div className="p-10 pt-20 grid gap-[100px] overflow-hidden">
      <main className="flex justify-center ">
        <div className="grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: -100, y: 0, rotateZ: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotateZ: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="relative z-[4] hidden lg:flex"
          >
            <img src="/hc1.png" alt="" className="min-w-[300px] m-auto " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: -100, y: 0, rotateZ: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotateZ: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="relative z-[4] lg:hidden flex"
          >
            <img src="/hc1.png" alt="" className="min-w-[300px] m-auto " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -200, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="flex items-center relative z-[2]"
          >
            <section className="grid gap-5 pt-5 lg:pt-0">
              <h1 className="text-3xl font-bold ">IELTS General Training</h1>
              <p className="text-[20px]">
                IELTS General Training is for you if you wish to migrate and
                work abroad in an English-speaking country. It focuses mainly on
                assessing your proficiency, confidence, and comfort when
                communicating in English in daily situations that you are likely
                to encounter in a native English-speaking environment.
              </p>
              <Link
                href={"/courses/ielts-general-training"}
                className="w-fit pl-5 pr-5 pt-1 pb-1 bg-green-400 shadow-md rounded-md text-xl font-bold shadow-black"
              >
                Know More
              </Link>
            </section>
          </motion.div>
        </div>
      </main>
      <main className="flex justify-center ">
        <div className="grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 200, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="flex items-center order-2 lg:order-1 relative z-[2] "
          >
            <section className="grid gap-5">
              <h1 className="text-3xl font-bold ">IELTS Academic Traning</h1>
              <p className="text-[20px]">
                IELTS Academic is for pursuing higher education overseas.It
                assesses your readiness to use English as a medium of study.This
                test demonstrates your proficiency to universities and
                colleges,showing you have the skills needed to succeed
                academically.It helps you achieve your educational goals.
              </p>
              <Link
                href={"/courses/ielts-academic-training"}
                className="w-fit pl-5 pr-5 pt-1 pb-1 bg-green-400 shadow-md rounded-md text-xl font-bold shadow-black"
              >
                Know More
              </Link>
            </section>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: -100, y: 0, rotateZ: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotateZ: 6 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="order-1 lg:order-2 relative z-[4] hidden lg:flex"
          >
            <img src="/hc2.png" alt="" className="min-w-[300px] m-auto " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: -100, y: 0, rotateZ: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotateZ: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="order-1 lg:order-2 relative z-[4] lg:hidden flex"
          >
            <img src="/hc2.png" alt="" className="min-w-[300px] m-auto " />
          </motion.div>
        </div>
      </main>

      <main className="flex justify-center ">
        <div className="grid lg:grid-cols-2 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: -100, y: 0, rotateZ: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotateZ: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="relative z-[4] hidden lg:flex"
          >
            <img src="/hc3.png" alt="" className="min-w-[300px] m-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: -100, y: 0, rotateZ: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotateZ: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="relative z-[4] lg:hidden flex"
          >
            <img src="/hc3.png" alt="" className="min-w-[300px] m-auto" />
          </motion.div>
          <motion.div  initial={{ opacity: 0, scale: 0.9, x: -200, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }} className="flex items-center relativez-[2]">
            <section className="grid gap-5">
              <h1 className="text-3xl font-bold ">Spoken English course</h1>
              <p className="text-[20px]">
                Our spoken English course is ideal for beginners, offering
                lessons in situational speaking and different accents.Tailored
                resources fill gaps in grammar and enhance vocabulary.Gain the
                tools you need for a better understanding of English.
              </p>
              <Link
                href={"/courses/spoken-english-course"}
                className="w-fit pl-5 pr-5 pt-1 pb-1 bg-green-400 shadow-md rounded-md text-xl font-bold shadow-black"
              >
                Know More
              </Link>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Courses;
