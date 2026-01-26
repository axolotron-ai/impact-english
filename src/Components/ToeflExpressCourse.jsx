import Link from "next/link";
import React from "react";

const ToeflExpressCourse = () => {
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
            Toefl Intense Time line
          </h1>
          <h3 className="lg:text-xl text-[17px] pt-5 text-justify ">
            TOEFL Intense is designed for learners who already have a working command of English and need focused, efficient preparation—not a long learning curve. This program is ideal if you’re operating on tight deadlines for university applications, visa timelines, or retakes. We cut out the noise and focus on what directly impacts your TOEFL score: academic language use, task accuracy, time management, and test execution.</h3>
        </section>
        <section className="lg:flex hidden justify-center">
          <section className="grid grid-cols-7 h-fit  overflow-y-hidden">
            <section className="col-span-3 ">
              <div className="flex justify-end mt-[100px]">
                <div className="max-w-[450px]">
                  <h1 className="font-bold text-xl montserrat">
                    Short on time but clear about your goal?
                  </h1>
                  <h5>
                   TOEFL Intense is designed for learners who already have a working command of English and need focused, efficient preparation—not a long learning curve.

This program is ideal if you’re operating on tight deadlines for university applications, visa timelines, or retakes. We cut out the noise and focus on what directly impacts your TOEFL score: academic language use, task accuracy, time management, and test execution.

You’ll work intensively across all four skills, receive detailed, actionable feedback, and take full-length simulation mock tests ensuring confidence and clarity.
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

            {/*  */}

            
            <section className="col-span-3"></section>

            {/*  */}

            {/*  */}
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

            <section className="pl-2">
              <section className=" border-l-4 bordered pl-5">
                <div className="flex justify-start ">
                  <div className="max-w-[450px]">
                    <h1 className="font-bold text-[21px] montserrat">
                      Short on time but clear about your goal?
                    </h1>
                    <h5>
                    TOEFL Intense is designed for learners who already have a working command of English and need focused, efficient preparation—not a long learning curve.

This program is ideal if you’re operating on tight deadlines for university applications, visa timelines, or retakes. We cut out the noise and focus on what directly impacts your TOEFL score: academic language use, task accuracy, time management, and test execution.

You’ll work intensively across all four skills, receive detailed, actionable feedback, and take full-length simulation mock tests ensuring confidence and clarity.
                    </h5>
                  </div>
                </div>
                <div className="ml-[-10px] z-[2] relative">
                  <div className="border-b-4 borderedv pt-10 "></div>
                </div>
              </section>
            </section>
          </div>

          {/*  */}

          {/*  */}

         
        </section>

        <section>
          <section className="lg:py-20 lg:px-20 text-xl  text-center pt-20 pb-10">
            <h4 className="font-bold">
              If your deadline is close and you need a clear, efficient path forward-
TOEFL Intense fits the purpose.
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
                  Toefl Intense Training
                </h1>
                <p className="pt-5">
                  Our Toefl Intense Training is ideal for intermediate, offering
                  lessons in situational speaking and different accents.Tailored
                  resources fill gaps in grammar and enhance vocabulary.
                </p>
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
                  href={"/courses/toefl-express-training/payment"}
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

export default ToeflExpressCourse;
