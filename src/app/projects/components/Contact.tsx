import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="h-screen w-full flex flex-col justify-between text-slate-900 bg-slate-100">
      <div></div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold ">On reste en contact ?</h2>
        <p className="mt-4 p-4 text-center">
          Si vous souhaitez collaborer ou avez un projet en tête, n’hésitez pas
          à me contacter !
        </p>
        <a
          href="mailto:Fregier.thibault.pro@gmail.com"
          className="inline-block mt-6 px-6 py-3 text-slate-100 bg-purple-600 rounded-xl transition-transform transform hover:bg-slate-800 "
        >
          M'envoyer un mail
        </a>
      </div>
      <div className="flex justify-between p-4">
        <p className="text-xs">Thibault Fregier | 2025</p>
        <div className="flex gap-2">
          <Link href="https://x.com/FregierThibault">
            <FaTwitter />
          </Link>
          <Link href="https://www.linkedin.com/in/thibaultfregier/">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/RacoonyThibault/">
            <FaGithub />
          </Link>
        </div>
      </div>
    </section>
  );
}
