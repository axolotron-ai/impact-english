"use client"

import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import axios from "axios";
const Contact = () => {


  const [name,setName] = useState("");
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState(0)

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/send-mail",{
        name,email,phone
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }}

  return (
    <div className="min-h-[100vh] flex items-center overflow-hidden">
      <main className="grid lg:grid-cols-5">
        <section className="col-span-2 flex justify-center lg:p-20 ">
          <div className="">
            <motion.div  initial={{ opacity: 0, scale: 0.9, x: -100, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }} className="p-[30px]">
              <div className="">
                <h1 className="square-peg text-7xl text-red-600">Contact</h1>
                <img src="/redline.png" alt="" className="w-[120px] ml-10" />
              </div>
              <div className="">
                <p className=" montserrat text-xl lg:text-2xl pt-5 pr-20 lg:pr-0">
                  We’re here to help you achieve your language learning goals!
                  we’d love to hear from you.
                </p>
              </div>
            </motion.div>
            <motion.div  initial={{ opacity: 0, scale: 0.9, x: 0, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }} className="lg:flex gap-5 pt-10 hidden">
              <div className="">
                <img src="/greenline.png" alt="" className="h-[230px]" />
              </div>

              <div className="montserrat grid gap-5">
                <a href="tel:+919420969000">
                  <div className="flex ">
                    <div className="">
                      <FaPhoneAlt className="m-2 text-2xl" />
                    </div>
                    <div className="">
                      <h1 className="font-bold">Ph.no</h1>
                      <p>94209 69000</p>
                    </div>
                  </div>
                </a>
                <a href="mailto:enquiries.impactenglish@gmail.com">
                  <div className="flex">
                    <div className="">
                      <IoMail className="m-2 text-2xl" />
                    </div>
                    <div className="">
                      <h1 className="font-bold">Email</h1>
                      <p>enquiries.impactenglish@gmail.com</p>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="flex">
                    <div className="">
                      <FaLocationDot className="m-2 text-2xl" />
                    </div>
                    <div className="">
                      <h1 className="font-bold">Address</h1>
                      <p>
                        Vasant Valley Complex, 1401/Acacia Near narayana School
                        Khadakpada, Kalyan West, Mumbai, Maharashtra 421301
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <motion.div  initial={{ opacity: 0, scale: 0.9, x: 100, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }} className="col-span-3 lg:p-10 lg:mr-10 lg:mt-20 ">
          <div className="">
            <img
              src="/contactbgst.png"
              alt=""
              className="rotate-[3deg] lg:w-[700px] w-[320px] relative z-[1] mx-auto lg:block hidden"
            />
            <img
              src="/contactbgstmd.png"
              alt=""
              className="rotate-[2deg] w-[300px] relative z-[1] mx-auto lg:hidden"
            />
          </div>
          <div className="lg:mt-[-520px] mt-[-310px] relative z-[2]   flex flex-col justify-center items-center h-full">
            <form
              action=""
              className="grid lg:gap-8 gap-5 w-[250px] lg:w-[500px] pl-5 rotate-[2deg] lg:rotate-[3.5deg]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name=""
                id=""
                required
                onChange={(e)=>setName(e.target.value)}
                placeholder="Full Name"
                className="rounded-md bg-white placeholder:text-zinc-400 focus:outline-none shadow-md w-full lg:p-3 p-2 pl-5"
              />
              <input
                type="email"
                name=""
                id=""
                required
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email Address"
                className="rounded-md bg-white placeholder:text-zinc-400 focus:outline-none shadow-md w-full lg:p-3 p-2 pl-5"
              />
              <input
                type="tel"
                name=""
                id=""
                required
                onChange={(e)=>setPhone(e.target.value)}
                placeholder="Phone Number"
                className="rounded-md bg-white placeholder:text-zinc-400 focus:outline-none shadow-md w-full lg:p-3 p-2 pl-5"
              />
              <input
                type="submit"
                value="Send"
                className="rounded-md text-white bg-green-400 focus:outline-none shadow-md w-full lg:p-3 p-2"
              />
            </form>
          </div>
        </motion.div>
        <div className="flex lg:hidden gap-5 pt-[140px] px-8">
          <div className="">
            <img src="/greenline.png" alt="" className="h-[230px]" />
          </div>

          <div className="montserrat grid gap-5">
            <a href="tel:+919420969000">
              <div className="flex ">
                <div className="">
                  <FaPhoneAlt className="m-2 text-2xl" />
                </div>
                <div className="">
                  <h1 className="font-bold">Ph.no</h1>
                  <p>94209 69000</p>
                </div>
              </div>
            </a>
            <a href="mailto:enquiries.impactenglish@gmail.com">
              <div className="flex">
                <div className="">
                  <IoMail className="m-2 text-2xl" />
                </div>
                <div className="">
                  <h1 className="font-bold">Email</h1>
                  <p>enquiries.impactenglish@gmail.com</p>
                </div>
              </div>
            </a>
            <a href="">
              <div className="flex">
                <div className="">
                  <FaLocationDot className="m-2 text-2xl" />
                </div>
                <div className="">
                  <h1 className="font-bold">Address</h1>
                  <p>
                    Vasant Valley Complex, 1401/Acacia Near narayana School
                    Khadakpada, Kalyan West, Mumbai, Maharashtra 421301
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
