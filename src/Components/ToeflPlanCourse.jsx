import Link from "next/link";
import React from "react";

const ToeflPlanCourse = () => {
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
            Toefl Pre Plan
          </h1>
          <h3 className="lg:text-xl text-[17px] pt-5 text-left ">
            Toefl is the right choice if you prefer a fully computer-delivered test. The exam is shorter in duration, assesses integrated language skills and is available both at test centres and as a Home Edition, offering added flexibility. TOEFL is widely recognised, with over 13,000 universities and institutions worldwide.
          </h3>
        </section>
        <section className="lg:flex hidden justify-center">
          <section className="grid grid-cols-7 h-fit  overflow-y-hidden">
            <section className="col-span-3 ">
              <div className="flex justify-end mt-[100px]">
                <div className="max-w-[450px]">
                  <h1 className="font-bold text-xl montserrat">
                    Foundation & Skill Building
                  </h1>
                  <h5>
                    ⏮️Reading accuracy and speed
                    Integrating core skills-skimming, scanning, inference, and academic vocabulary. </h5>
                    <h5>⏮️Listening for main ideas and exposure to authentic lectures, discussions, and project-based conversations. </h5>
                    <h5>⏮️Writing modules focused on idea development, coherence, and academic tone, with the objective to succeed in both integrated and independent tasks </h5>
                  
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

            <section className="col-span-1 ">
              <div className=" h-full">
                <div className="pt-[100px]  flex justify-center">
                  <div className=" ">
                    <div className="bg-white">
                      <h1 className="text-xl font-bold text-green-400 pt-2 paper   pb-2">
                        Month 2
                      </h1>
                    </div>
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

            <section className="col-span-3 pt-10 ">
              <div className="flex justify-start mt-[100px]">
                <div className="max-w-[450px]">
                  <h1 className="font-bold text-xl montserrat">
                    Speaking practice & Skill Application 
                  </h1>
                 <h5> ⏮️ Speaking practice & Skill Application
From independent responses to campus-style discussions, we coach you to speak with structure, clarity, and confidence.</h5>

<h5>
⏮️ Timed practice and section-wise evaluation.
</h5>
<h5>
⏮️ Full-length test simulations and mock tests covering all four skills.
</h5>
<h5>
⏮️ Detailed feedback to identify gaps and refine performance.
</h5>
                </div>
              </div>
              <div className="pr-[150px] ml-[-80px] z-[2] relative">
                <div className="border-b-4 borderedv pt-10 "></div>
              </div>
            </section>

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
                      Foundation & Aptitude test
                    </h1>
                    <h5>
                    ⏮️Reading accuracy and speed
                    Integrating core skills-skimming, scanning, inference, and academic vocabulary. </h5>
                    <h5>⏮️Listening for main ideas and exposure to authentic lectures, discussions, and project-based conversations. </h5>
                    <h5>⏮️Writing modules focused on idea development, coherence, and academic tone, with the objective to succeed in both integrated and independent tasks </h5>
                  
                  </div>
                </div>
                <div className="ml-[-10px] z-[2] relative">
                  <div className="border-b-4 borderedv pt-10 "></div>
                </div>
              </section>
            </section>
          </div>

          {/*  */}

          <div className="">
            <section className=" ">
              <div className="">
                <div className=" flex ">
                  <div className="flex items-center gap-2 pt-5 ">
                    <div className="flex justify-start">
                      <p className="w-4 h-4 bg-green-400 text-center rounded-full"></p>
                    </div>
                    <h1 className="text-2xl font-bold text-green-400 pt-2  pb-2">
                      Month 2
                    </h1>
                  </div>
                </div>
              </div>
            </section>

            <section className="pl-2">
              <section className=" border-l-4 bordered pl-5">
                <div className="flex justify-start ">
                  <div className="max-w-[450px]">
                    <h1 className="font-bold text-[21px] montserrat">
                      Intermediate Skills
                    </h1>
                   <h5> ⏮️ Speaking practice & Skill Application
From independent responses to campus-style discussions, we coach you to speak with structure, clarity, and confidence.</h5>

<h5>
⏮️ Timed practice and section-wise evaluation.
</h5>
<h5>
⏮️ Full-length test simulations and mock tests covering all four skills.
</h5>
<h5>
⏮️ Detailed feedback to identify gaps and refine performance.
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

         
        </section>

        <section>
          <section className="lg:py-20 lg:px-20 text-xl  text-center pt-20 pb-10">
            <h4 className="font-bold">
              Up-to-date with the January 2026 TOEFL changes, this CEFR-aligned, adaptive-strategy-based preparation delivers faster results, smarter prep, and real academic readiness.
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
                  Toefl Pre Plan Training
                </h1>
                <p className="pt-5">
                  If your goal is not just to take the TOEFL—but to excel in it—you’re in the right place.
                </p>
              </div>
              <section className="flex gap-10 pt-5">
                <div className="">
                  <h1 className="opacity-60">Duration</h1>
                  <h1 className=" font-bold">
                    <span className="text-4xl font-bold">8</span> Weeks
                  </h1>
                </div>
                <div className="">
                  <h1 className="opacity-60">Price</h1>
                  <h1 className="text-4xl font-bold">&#8377; 14,999</h1>
                </div>
              </section>
              <div className="mt-10">
                <Link
                  href={"/courses/toefl-plan-training/payment"}
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

export default ToeflPlanCourse;
