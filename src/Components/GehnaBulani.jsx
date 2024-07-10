"use client";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const GehnaBulani = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="lg:px-20 px-10 py-20">
        <section className="py-10">
          <Link
            href={"/"}
            className="opacity-60 hover:opacity-100 duration-200 font-bold text-xl"
          >
            &lt; Back
          </Link>
        </section>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="">
            <img src="/heroimg.png" alt="" className="max-w-[400px] m-auto" />
          </div>
          <div className="flex items-center pt-10">
            <div className="">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-700 bg-clip-text inline-block text-transparent">
                Gehna Bulani
              </h1>
              <h5 className="">IELTS & TEFL Certified Trainer</h5>
              <h6 className="text-[19px] pt-2">
                As a person with a passion for languages, I explored courses
                like TEFL and IELTS to better educate students. Teaching
                globally, I found that the real challenge in language learning
                was a lack of enthusiasm. By creating customized lessons, I aim
                to make language learning engaging and enjoyable, similar to how
                we naturally learn as children.
              </h6>
              <div className="flex justify-around lg:justify-start gap-10 pt-5">
                <div className="">
                  <h1 className="text-4xl font-bold">10+</h1>
                  <h3>
                    Years of <br /> experience
                  </h3>
                </div>
                <div className="">
                  <h1 className="text-4xl font-bold">50+</h1>
                  <h3>
                    7 band
                    <br /> Students made
                  </h3>
                </div>
              </div>
              <div className="text-green-400 text-3xl pt-8 flex justify-around lg:justify-start lg:gap-20">
                <a href="" target="_blank">
                  <FaInstagram />
                </a>
                <a href="" target="_blank">
                  <FaFacebook />
                </a>
                <a href="" target="_blank">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GehnaBulani;
