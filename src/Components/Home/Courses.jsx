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
              <h1 className="lg:text-3xl text-2xl font-bold momo">IELTS General Training</h1>
              <p className="text-[17px] lg:text-[20px]">
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
              <h1 className="lg:text-3xl text-2xl font-bold momo">IELTS Academic Traning</h1>
              <p className="text-[17px] lg:text-[20px]">
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
              <h1 className="lg:text-3xl text-2xl font-bold momo">Spoken English course</h1>
              <p className="text-[17px] lg:text-[20px]">
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

      <main className="flex justify-center ">
        <div className="grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 200, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="flex items-center order-2 lg:order-1 relative z-[2] "
          >
            <section className="grid gap-5">
              <h1 className="lg:text-3xl text-2xl font-bold momo">TOEFL prep plan</h1>
              <p className="text-[17px] lg:text-[20px]">
                Toefl is the right choice if you prefer a fully computer-delivered test. The exam is shorter in duration, assesses integrated language skills  and is available both at test centres and as a Home Edition, offering added flexibility. TOEFL is widely recognised, with over 13,000 universities and institutions worldwide.
              </p>
              <Link
                href={"/courses/toefl-plan-training"}
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
            <img src="/hc4.png" alt="" className="min-w-[300px] m-auto " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: -100, y: 0, rotateZ: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotateZ: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="order-1 lg:order-2 relative z-[4] lg:hidden flex"
          >
            <img src="/hc4.png" alt="" className="min-w-[300px] m-auto " />
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
            <img src="/hc8.png" alt="" className="min-w-[300px] m-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: -100, y: 0, rotateZ: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotateZ: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="relative z-[4] lg:hidden flex"
          >
            <img src="/hc8.png" alt="" className="min-w-[300px] m-auto" />
          </motion.div>
          <motion.div  initial={{ opacity: 0, scale: 0.9, x: -200, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }} className="flex items-center relativez-[2]">
            <section className="grid gap-5">
              <h1 className="lg:text-3xl text-2xl font-bold momo">TOEFL Intense</h1>
              <p className="text-[17px] lg:text-[20px]">
                TOEFL Express is designed for learners who already have a working command of English and need focused, efficient preparation—not a long learning curve. This program is ideal if you’re operating on tight deadlines for university applications, visa timelines, or retakes. We cut out the noise and focus on what directly impacts your TOEFL score: academic language use, task accuracy, time management, and test execution.
              </p>
              <Link
                href={"/courses/toefl-express-training"}
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
              <h1 className="lg:text-3xl text-2xl font-bold momo">Express IELTS</h1>
              <p className="text-[17px] lg:text-[20px]">
                Express IELTS is effectively designed for candidates who are working with tight university and visa timelines.If you have an intermediate command of English and need focused preparation with measurable results, look no further. This intensive program streamlines the process by targeting exam-specific skills, scoring criteria, and common weaknesses across all four modules.
                </p>
              <Link
                href={"/courses/express-ielts-training"}
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
    </div>
  );
};

export default Courses;
