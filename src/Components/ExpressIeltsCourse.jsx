import Link from "next/link";
import React from "react";

const ExpressIeltsCourse = () => {
  return (
    <div className="lg:px-20 px-10 py-20 paper bg-cover">
      <main>
        <section className="pb-10">
          <Link
            href={"/"}
            className="opacity-60 hover:opacity-100 duration-200 font-bold text-xl"
          >
            &lt; Back
          </Link>
        </section>
        <section className="lg:px-20 pb-10">
          <h1 className="text-4xl montserrat font-bold">
            Express IELTS Time line
          </h1>
          <h3 className="lg:text-xl text-[17px] pt-5 text-justify ">
            Express IELTS is effectively designed for candidates who are working with tight university and visa timelines.If you have an intermediate command of English and need focused preparation with measurable results, look no further. This intensive program streamlines the process by targeting exam-specific skills, scoring criteria, and common weaknesses across all four modules.</h3>
        </section>
        <section className="lg:px-20 pb-10 max-w-[700px] mt-[60px]">
          <h1 className="font-bold text-xl montserrat">
            Short on time but serious about your IELTS score? Express IELTS is right up your alley
          </h1>
          <h5 className="h-fit">
            Express IELTS is effectively designed for candidates who are working with tight university and visa timelines.If you have an intermediate command of English and need focused preparation with measurable results, look no further.

This intensive program streamlines the process by targeting exam-specific skills, scoring criteria, and common weaknesses across all four modules.

 You’ll work on high-impact strategies, receive detailed, actionable feedback, and take full-length simulation mock tests to achieve the target band score.
            </h5>
        </section>
        {/* <section className="lg:px-20 pb-10">
          <section className="grid grid-cols-7 h-fit  overflow-y-hidden">
            <section className="col-span-3 ">
              <div className="flex justify-end mt-[100px]">
                <div className="max-w-[450px]">
                  <h1 className="font-bold text-xl montserrat">
                    Short on time but serious about your IELTS score? Express IELTS is right up your alley
                  </h1>
                  <h5>
                   Express IELTS is effectively designed for candidates who are working with tight university and visa timelines.If you have an intermediate command of English and need focused preparation with measurable results, look no further.

This intensive program streamlines the process by targeting exam-specific skills, scoring criteria, and common weaknesses across all four modules.

 You’ll work on high-impact strategies, receive detailed, actionable feedback, and take full-length simulation mock tests to achieve the target band score.

                   </h5>
                </div>
              </div>
              <div className="pl-[150px] mr-[-80px] z-[2] relative">
                <div className="border-b-4 borderedv pt-10 "></div>
              </div>
            </section>
            <section className="col-span-1 ">
              <div className=" h-full">
                <div className="pt-[100px]  flex justify-center">
                  <div className=" ">
                    <h1 className="text-xl font-bold py-2  text-green-400">
                      Month 1
                    </h1>
                    <div className="flex justify-center">
                      <p className="w-4 h-4 bg-green-400 text-center rounded-full"></p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 h-full ">
                  <div className=""></div>
                  <div className="border-l-4 bordered h-full "></div>
                </div>
              </div>
            </section>
            <section className="col-span-3"></section>

            
            <section className="col-span-3"></section>
          </section>
        </section>

        <section className="lg:hidden">
          <div className="">
            <section className=" ">
              <div className="">
                <div className="pt-[20px]  flex ">
                  <div className=" ">
                    <h1 className="text-2xl font-bold text-green-400 pt-2 pb-2">
                      Month 1
                    </h1>
                    <div className="flex justify-start">
                      <p className="w-4 h-4 bg-green-400 text-center rounded-full"></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="">
              <section className=" border-l-4 bordered pl-5">
                <div className="flex justify-start ">
                  <div className="max-w-[450px]">
                    <h1 className="font-bold text-[21px] montserrat">
                      Short on time but serious about your IELTS score? Express IELTS is right up your alley
                    </h1>
                    <h5>
                    Express IELTS is effectively designed for candidates who are working with tight university and visa timelines.If you have an intermediate command of English and need focused preparation with measurable results, look no further.

This intensive program streamlines the process by targeting exam-specific skills, scoring criteria, and common weaknesses across all four modules.

 You’ll work on high-impact strategies, receive detailed, actionable feedback, and take full-length simulation mock tests to achieve the target band score.

                    </h5>
                  </div>
                </div>
                <div className="ml-[-10px] z-[2] relative">
                  <div className="border-b-4 borderedv pt-10 "></div>
                </div>
              </section>
            </section>
          </div>

        </section> */}

        <section>
          <section className="lg:py-20 lg:px-20 text-xl  text-center pt-10 pb-10">
            <h4 className="font-bold">
              We ensure comprehensive coverage of all Express Ielts components
              with specific focus on each skill, providing students with
              targeted practice, revision, and mock tests in the final week to
              simulate the actual test environment.
            </h4>
          </section>
          <section className="grid lg:grid-cols-2">
            <div className="py-10 lg:py-0">
              <img
                src="/c3.png"
                alt=""
                className="lg:max-w-[400px] max-w-[320px] m-auto"
              />
            </div>
            <div className="">
              <div className="">
                <h1 className="text-3xl font-bold montserrat">
                  Express IELTS Training
                </h1>
                {/* <p className="pt-5">
                  Our Express IELTS Training is ideal for intermediate, offering
                  lessons in situational speaking and different accents.Tailored
                  resources fill gaps in grammar and enhance vocabulary.
                </p> */}
              </div>
              <section className="flex gap-10 pt-5">
                <div className="">
                  <h1 className="opacity-60">Duration</h1>
                  <h1 className=" font-bold">
                    <span className="text-4xl font-bold">4</span> Weeks
                  </h1>
                </div>
                <div className="">
                  <h1 className="opacity-60">Price</h1>
                  <h1 className="text-4xl font-bold">&#8377; 7,999</h1>
                </div>
              </section>
              <div className="mt-10">
                <Link
                  href={"/courses/express-ielts-training/payment"}
                  className="w-fit pl-5 pr-5 py-2 bg-green-400 shadow-md rounded-md text-xl font-bold shadow-black"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default ExpressIeltsCourse;
