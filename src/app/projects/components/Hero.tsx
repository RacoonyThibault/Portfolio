"use client"

import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Hero() {

  const handleScroll = () => {
    const nextSection = document.getElementById("about-me");
    if(nextSection){
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold ">Thibault.</h1>
      <div className=" h-[2px] w-10 my-6 bg-purple-600"></div>
      <p className="text-lg text-gray-300 text-center max-w-[600px]">
      Salut, moi c&apos;est Thibault! Un développeur web passionné dédié à la
      création d&apos;expériences numériques exceptionnelles.
      </p>
      <FaArrowAltCircleDown onClick={handleScroll} className="text-purple-600 text-4xl mt-6 cursor-pointer" />
    </section>
  );
}
