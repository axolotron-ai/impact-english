"use client";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import React from "react";
import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { Drawer } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const path2=useParams();
  console.log(path2);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="fixed w-full top-0 z-[10] m-0 bg-white ">
      <main className="flex justify-between lg:px-20 px-10 shadow-md w-full py-2.5 items-center bg-white ">
        <section>
          <img src="/logo.png" alt="Logo" className="w-[120px]" />
        </section>
        <section className="lg:flex hidden gap-5 items-center text-xl ">
          <Link href={"/"}>
            <div className="flex overflow-hidden relative flex-col justify-center self-stretch px-5 py-2.5 my-auto aspect-[2.97]  max-md:pr-5">
              <img
                loading="lazy"
                src="/activeNav.png"
                className={
                  path === "/"
                    ? "object-cover absolute inset-0 size-full"
                    : "hidden"
                }
              />
              <p className="text-black z-[1]">Home</p>
            </div>
          </Link>
          <Link href={"/#about"}>
            <div className="flex overflow-hidden relative flex-col justify-center self-stretch px-5 py-2.5 my-auto aspect-[2.97]  max-md:pr-5">
              <img
                loading="lazy"
                src="/activeNav.png"
                className={
                  path === "/#about"
                    ? "object-cover absolute inset-0 size-full"
                    : "hidden"
                }
              />
              <p className="text-black z-[1]">About</p>
            </div>
          </Link>
          <Link href={"/#courses"}>
            <div className="flex overflow-hidden relative flex-col items-center justify-center self-stretch px-5 py-2.5 my-auto aspect-[2.97]  max-md:pr-5">
              <img
                loading="lazy"
                src="/activeNav.png"
                className={
                  path === "/#courses"
                    ? "object-cover absolute inset-0 size-full mt-3 h-[35px] overflow-hidden "
                    : "hidden"
                }
              />
              <p className="text-black z-[1]">Courses</p>
            </div>
          </Link>
          <Link href={"/#gallery"}>
            <div className="flex overflow-hidden relative flex-col items-center justify-center self-stretch px-5 py-2.5 my-auto aspect-[2.97]  max-md:pr-5">
              <img
                loading="lazy"
                src="/activeNav.png"
                className={
                  path === "/#gallery"
                    ? "object-cover absolute inset-0 size-full mt-3 h-[35px] overflow-hidden "
                    : "hidden"
                }
              />
              <p className="text-black z-[1]">Achievements</p>
            </div>
          </Link>
          <Link href={"/#contact"}>
            <div className="pl-5 pr-5 pt-1 pb-1 rounded-xl border border-black hover:bg-black hover:text-white duration-200">
              <p>Contact</p>
            </div>
          </Link>
        </section>
        <section className="lg:hidden">
          <IoMenu className="text-2xl" onClick={toggleDrawer(true)} />
        </section>
      </main>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <main className="block w-screen max-h-[100vh]  bg-white relative z-[5]">
          <section
            className="flex justify-start p-10"
            onClick={toggleDrawer(false)}
          >
            <h1 className="opacity-60 hover:opacity-100 duration-200 font-bold text-xl">
              &lt; Back
            </h1>
          </section>
          <section className="montserrat px-[50px]">
            <h1 className=" bg-gradient-to-r from-blue-800 to-black bg-clip-text text-3xl text-center">
              Menu
            </h1>
            <div className="pt-10 grid gap-6">
              <Link href={"/#courses"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">Courses</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <Link href={"/#gallery"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">Gallery</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <Link href={"/#contact"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">Contact</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
            </div>
          </section>

          <section className="flex justify-end items-end pt-20 px-[40px] gap-2">
            <div className="lg:flex justify-center gap-5 lg:pt-10 pt-[100px]">
              <p className="px-[20px] lg:px-0 text-center">
                Copyright 2020@ All rights reserved | This website was Build by
              </p>
              <span className="flex lg:inline-block pt-10 lg:pt-0 justify-center">
                <img src="/companylogoblack.png" alt="axolotron" />
              </span>
            </div>
          </section>
        </main>
      </Drawer>
    </div>
  );
};

export default Navbar;
