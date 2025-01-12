"use client";

import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("about-me");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Thibault.</h1>
      <div className="h-[2px] w-10 my-6 bg-purple-600"></div>
      <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-[90%] sm:max-w-[600px] mx-auto px-4 sm:px-0">
        Salut, moi c&apos;est Thibault! Un développeur web passionné dédié à
        la création d&apos;expériences numériques exceptionnelles.
      </p>
      <FaArrowAltCircleDown
        onClick={handleScroll}
        className="text-purple-600 text-6xl mt-6 cursor-pointer"
      />
    </section>
  );
}
