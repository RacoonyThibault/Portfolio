import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiGit,
  SiGitlab,
} from "react-icons/si";

const skillIcons: Record<string, React.ReactElement> = {
  JavaScript: <SiJavascript className="text-yellow-500" size={24} />,
  TypeScript: <SiTypescript className="text-blue-500" size={24} />,
  "React.js": <SiReact className="text-blue-400" size={24} />,
  "Next.js": <SiNextdotjs className="text-white dark:text-white" size={24} />,
  "Node.js": <SiNodedotjs className="text-green-600" size={24} />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" size={24} />,
  MongoDB: <SiMongodb className="text-green-500" size={24} />,
  SCSS: <SiSass className="text-pink-400" size={24} />,
  Docker: <SiDocker className="text-blue-500" size={24} />,
  Git: <SiGit className="text-orange-500" size={24} />,
  GitLab: <SiGitlab className="text-red-600" size={24} />,
};

export default function About() {
  return (
    <section id="about-me" className="w-full px-6 sm:px-12 py-12 bg-slate-100 text-slate-900">
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <Image
            src="/images/profilPicture.webp"
            alt="Thibault"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">Qui suis-je ?</h2>
          <p className="mt-4 text-slate-800 leading-relaxed">
            Je me spécialise dans la création d’applications web interactives et
            réactives utilisant les dernières technologies web. Avec des
            compétences solide en
            <span className="font-medium"> Next.js</span>,
            <span className=" font-medium"> TypeScript</span>, et
            <span className="font-medium"> Tailwind CSS</span>, Mon objectif est
            de fournir des solutions propres, efficaces et évolutives.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
          Au-delà du codage, j&apos;aime explorer de nouvelles technologies, faire
          de l&apos;escalade, lire et vivre un maximum d&apos;aventures !
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
          C&apos;est grâce à cet état d&apos;esprit volontaire que je souhaite créer des
  applications web modernes qui puissent donner vie à vos rêves
  numériques !
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2>Mon cv</h2>
        <a
          href="/CV_Thibault_Fregier.pdf"
          download="CV_Thibault_Fregier.pdf"
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg  hover:bg-slate-800 focus:outline-none transition-all duration-300"
          aria-label="Télécharger le CV de Thibault Frégier au format PDF"
        >
          <FaDownload />
        </a>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-slate-800 text-center">
          Skills
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6 max-w-[70%] min-w-64">
          {Object.entries(skillIcons).map(([skill, icon]) => (
            <div
              key={skill}
              className="flex items-center gap-2 px-4 py-2 bg-slate-300 text-slate-900 rounded-lg text-sm font-medium shadow"
            >
              {icon}
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
