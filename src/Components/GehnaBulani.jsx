"use client";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 ">
          <div className="flex justify-center">
            <img
              src="/heroimg.png"
              alt=""
              className="max-w-[400px] min-w-[280px] h-fit"
            />
          </div>
          <div className="flex items-center pt-10">
            <div className="">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-700 bg-clip-text inline-block text-transparent">
                Gehna Bulani
              </h1>
              <h5 className="">IELTS & TEFL Certified Trainer</h5>
              <h6 className="text-[19px] pt-2 text-justify">
                With a passion for languages and a strong inclination towards
                interpersonal acumen, I have endeavored to bridge the knowledge
                gap for my students by delving beyond the standard curriculum.My
                journey led me to certifications in TEFL, Young Learners
                English, and IELTS from ITTT Cambridge and IDP official
                partners, which fueled my desire to teach students across
                various levels and nationalities.
              </h6>
              <h6 className="text-[19px] pt-2 text-justify">
                My teaching experience, includes a significant tenure at Nevys
                in Toronto, Canada, where I worked with immigrants from diverse
                cultures and language levels. By customizing lessons to meet
                students' needs and making language learning an enjoyable
                experience, I strive to recreate the natural, immersive learning
                environment for the patrons.
              </h6>
              <div className="flex justify-around lg:justify-start gap-10 pt-5">
                <div className="">
                  <h1 className="text-4xl font-bold">5+</h1>
                  <h3>
                    Years of <br /> experience
                  </h3>
                </div>
                <div className="">
                  <h1 className="text-4xl font-bold">100+</h1>
                  <h3>
                    7 band
                    <br /> Students
                  </h3>
                </div>
              </div>
              <div className="text-green-400 text-3xl pt-8 flex justify-around lg:justify-start lg:gap-20">
                <a
                  href="https://www.instagram.com/impactenglish_ielts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/mamta.kalachandani?mibextid=rS40aB7S9Ucbxw6v"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
                <a href="https://wa.me/+919420969000" target="_blank">
                  <FaWhatsapp />
                </a>
                <a href="https://www.linkedin.com/in/impact-english-477911204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                  <FaLinkedin />
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
