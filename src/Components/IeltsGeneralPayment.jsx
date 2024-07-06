"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const IeltsGeneralPayment = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const Script = document.createElement("script");
    //id should be same as given to form element
    const Form = document.getElementById("donateForm");
    Script.setAttribute(
      "src",
      "https://checkout.razorpay.com/v1/payment-button.js"
    );
    Script.setAttribute("data-payment_button_id", "pl_OVMsYQXAop9qIG");
    if (Form) {
      Form.appendChild(Script);
    }
  }, [mounted]);
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  // console.log(currentDate);
  return (
    <div>
      <section className="px-10 lg:px-[100px] pt-10">
        <Link
          href={"/courses/ielts-general-training/"}
          className="opacity-60 hover:opacity-100 duration-200 font-bold text-xl"
        >
          &lt; Back
        </Link>
      </section>
      <div className="flex justify-center">
      <div className="lg:shadow-md lg:rounded-2xl pt-10 lg:p-10 max-w-[1000px]">
        <div className="px-10">
            <h1 className="text-2xl font-bold text-center py-5 ">General IELTS Course Payment</h1>
        </div>
        <main className="grid lg:grid-cols-2 pt-10 ">
        <section className="order-2 lg:order-1 p-5">
            <div className="">
                <div className="text-center">
                    <h1>This Button will redirect you to secure environment for secure payment transcation</h1>
                    <h1 className="text-3xl pt-5">Click to Enroll</h1>
                </div>
                <div className="flex justify-center py-5">
                  {mounted ? <form id="donateForm"></form> : null}
                </div>
            </div>
        </section>
        <section className="flex lg:justify-end justify-center order-1 lg:order-2">
          <div className="max-w-[350px]">
            <div className="bg-zinc-300 rounded-t-xl ">
              <div className="p-5">
                <img src="/cp1.png" alt="" className="w-full" />
              </div>
              <h1 className="font-bold text-center pb-2">General IELTS Course</h1>
              <div className=" p-5 pt-0">
                <div className="flex justify-between">
                  <h1 className="opacity-60">Duration : </h1>
                  <h1 className="">3 Months</h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="opacity-60">Date : </h1>
                  <h1 className="">{currentDate}</h1>
                </div>
              </div>
            </div>
            <div className="bg-zinc-300 rounded-b-xl mt-0.5">
              <div className="flex p-5 justify-between">
                
                <h1 className="text-2xl"> Total</h1>
                <h1 className="text-2xl"> &#8377;16,999</h1>
              </div>
              
            </div>
          </div>
        </section>
      </main>
      </div>
      
      </div>
    </div>
  );
};

export default IeltsGeneralPayment;
