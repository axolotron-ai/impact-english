'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';



export default function CTAButton() {
  const [ctaData, setCtaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('http://72.61.239.175:8000/api/cta/active')
      .then((response) => response.json())
      .then((result) => {
        if (result.success && result.data) {
          setCtaData(result.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching CTA:', error);
        setLoading(false);
      });
  }, []);

  const handleClick = () => {
    setAnimate(false)

    requestAnimationFrame(() => {
      setAnimate(true)
    })

    // Redirect AFTER animation
    setTimeout(() => {
      router.push(ctaData.button_link)
    }, 700)
  }

  if (loading || !ctaData) {
    return null;
  }

  return (
    <>
    
      <button
      onClick={handleClick}
      className={`bubblyButton ${animate ? 'animate' : ''}`}
    >
      {ctaData.button_name}
    </button>
    <style jsx>{`
        .bubblyButton {
	 font-family: 'Helvetica', 'Arial', sans-serif;
	 display: inline-block;
	 font-size: 20px;
   font-weight: 600;
	 padding: 0.5em 2em;
	 appearance: none;
	 background-color: #31c48dff;
	 color: #fff;
	 border-radius: 10px;
	 border: none;
	 cursor: pointer;
	 position: relative;
	 transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
	 box-shadow: 0 2px 25px rgba(49, 196, 141, 0.5);
}
  .bubblyButton:hover{
  transform:scale(1.05);
  }
 .bubblyButton:focus {
	 outline: 0;
}
 .bubblyButton:before, .bubblyButton:after {
	 position: absolute;
	 content: '';
	 display: block;
	 width: 140%;
	 height: 100%;
	 left: -20%;
	 z-index: -1000;
	 transition: all ease-in-out 0.5s;
	 background-repeat: no-repeat;
}
 .bubblyButton:before {
	 display: none;
	 top: -75%;
	 background-image: radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, transparent 20%, #31c48dff 20%, transparent 30%), radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, transparent 10%, #31c48dff 15%, transparent 20%), radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, #31c48dff 20%, transparent 20%);
	 background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
}
 .bubblyButton:after {
	 display: none;
	 bottom: -75%;
	 background-image: radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, transparent 10%, #31c48dff 15%, transparent 20%), radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, #31c48dff 20%, transparent 20%), radial-gradient(circle, #31c48dff 20%, transparent 20%);
	 background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
}
 .bubblyButton:active {
	 transform: scale(0.9);
	 background-color: #1de49bff;
	 box-shadow: 0 2px 25px rgba(49 , 196 ,141, 0.2);
}
 .animate:before {
	 display: block;
	 animation: topBubbles ease-in-out 0.75s forwards;
}
 .animate:after {
	 display: block;
	 animation: bottomBubbles ease-in-out 0.75s forwards;
}
 @keyframes topBubbles {
	 0% {
		 background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
	}
	 50% {
		 background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
	}
	 100% {
		 background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
		 background-size: 0% 0%;
	}
}
 @keyframes bottomBubbles {
	 0% {
		 background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
	}
	 50% {
		 background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
	}
	 100% {
		 background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
		 background-size: 0% 0%;
	}
}
 
      `}</style>
      
    </>
  );
}
