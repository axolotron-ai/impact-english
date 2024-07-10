"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const vidsrc = ["/vid1.mp4", "/vid2.mp4", "/vid3.mp4", "/vid4.mp4"];

const VideoReview = () => {
  const [num, setNum] = useState(0);
  const handleDecrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handleIncrement = () => {
    if (num < vidsrc.length - 1) {
      setNum(num + 1);
    } else {
    }
  };
  useEffect(() => {
    setNum(0);
  }, []);
  return (
    <div className="bg-green-400 min-h-[100vh] w-full overflow-hidden">
      <div className="py-10 px-10 lg:px-20 text-center">
        <h1 className="text-white lg:text-4xl text-2xl font-bold">
          Our Student Reviews
        </h1>
      </div>
      <div className="h-full flex justify-center gap-5 p-5 items-center">
        <div className="">
          {num > 0 && (
            <IoIosArrowDropleftCircle
              onClick={handleDecrement}
              className="text-4xl text-white"
            />
          )}
        </div>
        <div className="">
          <video src={vidsrc[num]} autoPlay muted controls className="max-h-[80vh] rounded-2xl">

          </video>
        </div>
        <div className="">
          {num < vidsrc.length - 1 && (
            <IoIosArrowDroprightCircle
              onClick={handleIncrement}
              className="text-4xl text-white"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoReview;
