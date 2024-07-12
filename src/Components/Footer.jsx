import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <main className="bg-black p-5 lg:p-10 lg:px-20 px-10 text-white mt-10">
        <section className="grid lg:grid-cols-3 gap-10 pt-10 lg:pt-0">
          <section className="">
            <h1 className="text-2xl lg:text-3xl font-bold montserrat">
              IMPACT ENGLISH
            </h1>
            <h5 className="pt-5">
              Exclusive IELTS preparation and Training Institute
            </h5>
          </section>
          <section className="">
            <h1 className="text-2xl lg:text-3xl font-bold montserrat">
              Navigation
            </h1>
            <div className="grid lg:grid-cols-2 pt-5 lg:gap-5 gap-2">
              <Link
                href={"/"}
                className="opacity-70 hover:opacity-100 duration-200"
              >
                Home
              </Link>
              <Link
                href={"/#about"}
                className="opacity-70 hover:opacity-100 duration-200"
              >
                About us
              </Link>
              <Link
                href={"/#courses"}
                className="opacity-70 hover:opacity-100 duration-200"
              >
                Courses
              </Link>
              <Link
                href={"/#gallery"}
                className="opacity-70 hover:opacity-100 duration-200"
              >
                Achievements
              </Link>
              <Link
                href={"/#contact"}
                className="opacity-70 hover:opacity-100 duration-200"
              >
                Contact
              </Link>
            </div>
          </section>
          <section className="">
            <h1 className="text-2xl lg:text-3xl font-bold montserrat">
              Information
            </h1>
            <div className="montserrat grid gap-5 pt-5">
              <Link href={"tel:+919420969000"}>
                <div className="flex opacity-70 hover:opacity-100 duration-200 ">
                  <div className="">
                    <FaPhoneAlt className="m-2 text-2xl" />
                  </div>
                  <div className="">
                    <h1 className="font-bold">Ph.no</h1>
                    <p>94209 69000</p>
                  </div>
                </div>
              </Link>
              <Link href={"mailto:enquiries.impactenglish@gmail.com"}>
                <div className="flex opacity-70 hover:opacity-100 duration-200">
                  <div className="">
                    <IoMail className="m-2 text-2xl" />
                  </div>
                  <div className="">
                    <h1 className="font-bold">Email</h1>
                    <p>enquiries.impactenglish@gmail.com</p>
                  </div>
                </div>
              </Link>
              <Link href={"https://maps.app.goo.gl/3M8wSG8M25F57jNJ8"}>
                <div className="flex opacity-70 hover:opacity-100 duration-200">
                  <div className="">
                    <FaLocationDot className="m-2 text-2xl" />
                  </div>
                  <div target="_blank" className="">
                    <h1 className="font-bold">Address</h1>
                    <p>
                      Impact English classes (IELTS connoisseur)IDP
                      certified.Official partners of IDP., Vasant Valley
                      Complex, 1401/Acacia Near narayana School Khadakpada,
                      Kalyan West, Mumbai, Maharashtra 421301
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </section>
        <section>
          <div className="lg:flex justify-center gap-5 lg:pt-10 pt-[100px]">
            <p className="px-[20px] lg:px-0 text-center">
              Copyright 2020@ All rights reserved | This website was Build by
            </p>
            <span className="flex lg:inline-block pt-10 lg:pt-0 justify-center">
              <a href="https://www.axolotron.com/">
                <img src="/companylogo.png" alt="axolotron" />
              </a>
            </span>
          </div>
          <div className="lg:flex hidden justify-center gap-20 pt-10 text-2xl">
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
            {/* <a
              href="https://www.linkedin.com/in/gehna-bulani-bb065019a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin />
            </a> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Footer;
