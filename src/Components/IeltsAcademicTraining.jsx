import Link from "next/link";
import React from "react";

const IeltsAcademicTraining = () => {
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
            Academic IELTS Time line
          </h1>
          <h3 className="lg:text-xl text-[17px] pt-5 text-justify ">
            The Academic IELTS is designed for those seeking higher education or
            professional registration in English-speaking environments. It
            evaluates the four key language skills: listening, reading, writing,
            and speaking. This test ensures candidates are prepared for academic
            study with rigorous assessments tailored to university-level English
            proficiency.
          </h3>
        </section>
        <section className="lg:flex hidden justify-center">
          <section className="grid grid-cols-7 h-fit  overflow-y-hidden">
            <section className="col-span-3 pt-10">
              <div className="flex justify-end mt-[100px]">
                <div className="max-w-[450px]">
                  <h1 className="font-bold text-xl montserrat">
                    Introduction to IELTS
                  </h1>
                  <h5>
                    Reading: Skimming, scanning, understanding question types
                    (MCQ, True/False/Not Given, headings). Listening:
                    Comprehending various accents, pace regulation, question
                    types (MCQ, matching).
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
                    Intermediate IELTS
                  </h1>
                  <h5>
                    Writing Task 1: Interpreting and describing data (maps, line
                    graphs, bar charts, pie charts, tables). Writing Task 2:
                    Essay structures, types (argumentative,
                    advantages/disadvantages, problem/solution, discussion),
                    developing arguments.
                  </h5>
                </div>
              </div>
              <div className="pr-[150px] ml-[-80px] z-[2] relative">
                <div className="border-b-4 borderedv pt-10 "></div>
              </div>
            </section>

            {/*  */}

            <section className="col-span-3 pt-10 ">
              <div className="flex justify-end mt-[100px]">
                <div className="max-w-[450px]">
                  <h1 className="font-bold text-xl montserrat">
                    Advanced Practice and Review
                  </h1>
                  <h5>
                    Speaking: Fluency, coherence, pronunciation, answering
                    strategies. Mock Exams: Full-length practice tests,
                    feedback, final revision, and strategy reinforcement.
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
                    <div className="bg-white">
                      <h1 className="text-xl font-bold text-green-400 pt-2 paper   pb-2">
                        Month 3
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
                      Introduction to IELTS
                    </h1>
                    <h5>
                      Reading: Skimming, scanning, understanding question types
                      (MCQ, True/False/Not Given, headings). Listening:
                      Comprehending various accents, pace regulation, question
                      types (MCQ, matching).
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
                      Intermediate IELTS
                    </h1>
                    <h5>
                      Writing Task 1: Interpreting and describing data (maps,
                      line graphs, bar charts, pie charts, tables). Writing Task
                      2: Essay structures, types (argumentative,
                      advantages/disadvantages, problem/solution, discussion),
                      developing arguments.
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
                      Advanced Practice and Review
                    </h1>
                    <h5>
                      Speaking: Fluency, coherence, pronunciation, answering
                      strategies. Mock Exams: Full-length practice tests,
                      feedback, final revision, and strategy reinforcement.
                    </h5>
                  </div>
                </div>
                <div className="ml-[-10px] z-[2] relative">
                  <div className="border-b-4 borderedv pt-10 "></div>
                </div>
              </section>
            </section>
          </div>
        </section>

        <section>
          <section className="lg:py-20 lg:px-20 text-xl  text-center pt-20 pb-10">
            <h4 className="font-bold">
              We ensure comprehensive coverage of all Academic IELTS components
              with specific focus on each skill, providing students with
              targeted practice, revision, and mock tests in the final week to
              simulate the actual test environment.
            </h4>
          </section>
          <section className="grid lg:grid-cols-2">
            <div className="py-10 lg:py-0">
              <img
                src="/c2.png"
                alt=""
                className="lg:max-w-[400px] max-w-[320px] m-auto"
              />
            </div>
            <div className="">
              <div className="">
                <h1 className="text-3xl font-bold montserrat">
                  Academic IELTS Training
                </h1>
                <p className="pt-5">
                  IELTS Academic is for pursuing higher education overseas.It
                  assesses your readiness to use English as a medium of study.
                  This test demonstrates your proficiency to universities and
                  colleges
                </p>
              </div>
              <section className="flex gap-10 pt-5">
                <div className="">
                  <h1 className="opacity-60">Duration</h1>
                  <h1 className=" font-bold">
                    <span className="text-4xl font-bold">12</span> Weeks
                  </h1>
                </div>
                <div className="">
                  <h1 className="opacity-60">Price</h1>
                  <h1 className="text-4xl font-bold">&#8377; 16,999</h1>
                </div>
              </section>
              <div className="mt-10">
                <Link
                  href={"/courses/ielts-academic-training/payment"}
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

export default IeltsAcademicTraining;
