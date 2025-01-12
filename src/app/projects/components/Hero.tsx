import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold ">Thibault.</h1>
      <div className=" h-[2px] w-10 my-6 bg-purple-600"></div>
      <p className="text-lg text-gray-300 text-center max-w-[600px]">
        Salut, moi c'est Thibault! Un développeur web passionné dédié à la
        création d’expériences numériques exceptionnelles.
      </p>
      <FaArrowAltCircleDown className="text-purple-600 text-4xl mt-6" />
    </section>
  );
}
