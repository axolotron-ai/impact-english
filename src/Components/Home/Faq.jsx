"use client"
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
const Faq = () => {
  return (
    <div className="lg:p-10 p-[30px]">
      <main>
        <section className="text-3xl font-bold montserrat text-center pt-10">
          Frequently Asked Questions
        </section>
        <section className=" ">
          <div className="grid lg:grid-cols-2 lg:p-10 pt-20 ">
            <div className="flex items-center">
              <div class="hs-accordion-group">
                <div class="hs-accordion active" id="hs-basic-heading-one">
                  <button
                    class="hs-accordion-toggle shadow-md  px-5 hs-accordion-active:text-green-400 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-controls="hs-basic-collapse-one"
                  >
                    <div className="flex justify-between w-full">
                      <h1>What is IELTS ?</h1>
                      <IoIosArrowDown className="bg-green-400 rounded-full text-2xl text-black" />
                    </div>
                  </button>
                  <div
                    id="hs-basic-collapse-one"
                    class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 border rounded-xl shadow-md "
                    aria-labelledby="hs-basic-heading-one"
                  >
                    <p class="text-gray-800 dark:text-neutral-200 p-5">
                      IELTS, or International English Language testing system is
                      the world’s most popular English language proficiency
                      test, IELTS are the international benchmarks for measuring
                      English in social , academic, and professional contexts
                    </p>
                  </div>
                </div>

                <div class="hs-accordion" id="hs-basic-heading-two">
                  <button
                    class="hs-accordion-toggle shadow-md px-5 hs-accordion-active:text-green-400 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-controls="hs-basic-collapse-two"
                  >
                    <div className="flex justify-between w-full">
                      <h1>Can I prebook my IELTS test?</h1>
                      <IoIosArrowDown className="bg-green-400 rounded-full text-2xl text-black" />
                    </div>
                  </button>
                  <div
                    id="hs-basic-collapse-two"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 border rounded-xl shadow-md "
                    aria-labelledby="hs-basic-heading-two"
                  >
                    <p class="text-gray-800 dark:text-neutral-200 p-5">
                      Booking your IELTS test through authorised nodal partners
                      like us provides added convenience by allowing you to
                      register easily and pre-book your preferred test slots.{" "}
                    </p>
                  </div>
                </div>
                <div class="hs-accordion" id="hs-basic-heading-two">
                  <button
                    class="hs-accordion-toggle shadow-md px-5 hs-accordion-active:text-green-400 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-controls="hs-basic-collapse-two"
                  >
                    <div className="flex justify-between w-full">
                      <h1>
                        What level of English proficiency is recommended to take
                        the IELTS test?
                      </h1>
                      <IoIosArrowDown className="bg-green-400 rounded-full text-2xl text-black" />
                    </div>
                  </button>
                  <div
                    id="hs-basic-collapse-two"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 border rounded-xl shadow-md "
                    aria-labelledby="hs-basic-heading-two"
                  >
                    <p class="text-gray-800 dark:text-neutral-200 p-5">
                      To take the IELTS, you should ideally have an intermediate
                      or higher level of English proficiency. This means being
                      comfortable with basic communication in English, both
                      written and spoken. Higher proficiency levels generally
                      result in better test scores.{" "}
                    </p>
                  </div>
                </div>
                <div class="hs-accordion" id="hs-basic-heading-two">
                  <button
                    class="hs-accordion-toggle shadow-md px-5 hs-accordion-active:text-green-400 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-controls="hs-basic-collapse-two"
                  >
                    <div className="flex justify-between w-full">
                      <h1>Can I get a refund for my fees?</h1>
                      <IoIosArrowDown className="bg-green-400 rounded-full text-2xl text-black" />
                    </div>
                  </button>
                  <div
                    id="hs-basic-collapse-two"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 border rounded-xl shadow-md "
                    aria-labelledby="hs-basic-heading-two"
                  >
                    <p class="text-gray-800 dark:text-neutral-200 p-5">
                      Our fees is non-refundable; however, we are committed to
                      providing dedicated efforts to ensure your satisfaction.{" "}
                    </p>
                  </div>
                </div>
                <div class="hs-accordion" id="hs-basic-heading-two">
                  <button
                    class="hs-accordion-toggle shadow-md px-5 hs-accordion-active:text-green-400 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-controls="hs-basic-collapse-two"
                  >
                    <div className="flex justify-between w-full">
                      <h1>Why choose IMPACT ENGLISH ?</h1>
                      <IoIosArrowDown className="bg-green-400 rounded-full text-2xl text-black" />
                    </div>
                  </button>
                  <div
                    id="hs-basic-collapse-two"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 border rounded-xl shadow-md "
                    aria-labelledby="hs-basic-heading-two"
                  >
                    <p class="text-gray-800 dark:text-neutral-200 p-5">
                      Choosing us means partnering with extensive experience and
                      a proven track record across multiple institutions. We
                      offer an innovative omni-channel approach, leveraging
                      fresh thinking and cutting-edge technology. Our meticulous
                      approach ensures precision and reliability, crucial for
                      IELTS & corporate success{" "}
                    </p>
                  </div>
                </div>
                <div class="hs-accordion" id="hs-basic-heading-two">
                  <button
                    class="hs-accordion-toggle shadow-md px-5 hs-accordion-active:text-green-400 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-controls="hs-basic-collapse-two"
                  >
                    <div className="flex justify-between w-full">
                      <h1>Should I take IELTS test?</h1>
                      <IoIosArrowDown className="bg-green-400 rounded-full text-2xl text-black" />
                    </div>
                  </button>
                  <div
                    id="hs-basic-collapse-two"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 border rounded-xl shadow-md "
                    aria-labelledby="hs-basic-heading-two"
                  >
                    <p class="text-gray-800 dark:text-neutral-200 p-5">
                      It is advisable to check the specific language
                      proficiency requirements with the employer or the job
                      posting before taking the IELTS test. IELTS is commonly
                      used as a measure of English proficiency for academic and
                      professional purposes, including vocational training.{" "}
                    </p>
                  </div>
                </div>
                <div class="hs-accordion" id="hs-basic-heading-two">
                  <button
                    class="hs-accordion-toggle shadow-md px-5 hs-accordion-active:text-green-400 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-controls="hs-basic-collapse-two"
                  >
                    <div className="flex justify-between w-full">
                      <h1>How long is my IELTS test valid?</h1>
                      <IoIosArrowDown className="bg-green-400 rounded-full text-2xl text-black" />
                    </div>
                  </button>
                  <div
                    id="hs-basic-collapse-two"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 border rounded-xl shadow-md "
                    aria-labelledby="hs-basic-heading-two"
                  >
                    <p class="text-gray-800 dark:text-neutral-200 p-5">
                      Your IELTS test score is valid for two years from the date
                      of test{" "}
                    </p>
                  </div>
                </div>
                <div class="hs-accordion" id="hs-basic-heading-two">
                  <button
                    class="hs-accordion-toggle shadow-md px-5 hs-accordion-active:text-green-400 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-controls="hs-basic-collapse-two"
                  >
                    <div className="flex justify-between w-full">
                      <h1>Which IELTS course should I choose as a student?</h1>
                      <IoIosArrowDown className="bg-green-400 rounded-full text-2xl text-black" />
                    </div>
                  </button>
                  <div
                    id="hs-basic-collapse-two"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 border rounded-xl shadow-md "
                    aria-labelledby="hs-basic-heading-two"
                  >
                    <p class="text-gray-800 dark:text-neutral-200 p-5">
                      Most Universities accept IELTS academic test{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10 lg:pt-0">
              <div className="flex justify-center">
                <img src="/faqimg.png" alt="" className="lg:w-[400px] m-auto" />
              </div>
              <div className="text-center pt-5">
                <h1 className="text-2xl font-bold montserrat">
                  Any Questions ?
                </h1>
                <p>Ask anything you want to know about Impact English</p>
              </div>
              <div className="flex justify-center">
                <form action="" className="pt-5">
                  <div className="w-full flex ">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border-2 border-zinc-400 lg:min-w-[400px] min-w-[300px] rounded-md focus:outline-none p-2 drop-shadow-2xl bg-white"
                    />
                  </div>
                  <div className="flex justify-center">
                    <input
                      type="submit"
                      value="Send"
                      className="bg-green-300 shadow-md shadow-black px-7 py-1 font-bold mt-5 rounded-md"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Faq;
