import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiSass,
} from "react-icons/si";

const skillIcons: Record<string, JSX.Element> = {
  "JavaScript": <SiJavascript className="text-yellow-500" size={24} />,
  "TypeScript": <SiTypescript className="text-blue-500" size={24} />,
  "React.js": <SiReact className="text-blue-400" size={24} />,
  "Next.js": <SiNextdotjs className="text-white dark:text-white" size={24} />,
  "Node.js": <SiNodedotjs className="text-green-600" size={24} />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" size={24} />,
  "MongoDB": <SiMongodb className="text-green-500" size={24} />,
  "SCSS": <SiSass className="text-pink-400" size={24} />,
};

export default function About() {
  return (
    <div className="container mx-auto px-6 sm:px-12 py-12">
      {/* Section Introduction */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300">
          Salut, moi c'est Thibault! Un développeur web passionné dédié à la création d’expériences numériques exceptionnelles.
        </p>
      </section>

      {/* Section Image and Bio */}
      <section className="mt-12 flex flex-col sm:flex-row items-center gap-12">
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
          <h2 className="text-2xl font-semibold text-white">Qui suis-je ?</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Je me spécialise dans la création d’applications web interactives et réactives utilisant les dernières technologies web. Avec des compétences solide en
            <span className="text-white font-medium"> Next.js</span>,
            <span className="text-white font-medium"> TypeScript</span>, et
            <span className="text-white font-medium"> Tailwind CSS</span>, Mon objectif est de fournir des solutions propres, efficaces et évolutives.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
          Au-delà du codage, j'aime explorer de nouvelles technologies, faire de l'escalade, lire et vivre un maximum d'aventures !
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
          C'est grâce à cet état d'esprit volontaire que je souhaite créer des applications web modernes qui puissent donner vie à vos rêves numériques !
          </p>
        </div>
      </section>

      {/* Section Skills */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white text-center">Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {Object.entries(skillIcons).map(([skill, icon]) => (
            <div
              key={skill}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium shadow"
            >
              {icon}
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-white">On reste en contact ?</h2>
        <p className="mt-4 text-gray-400">
          Si vous souhaitez collaborer ou avez un projet en tête, n’hésitez pas à me contacter !
        </p>
        <a
          href="mailto:Fregier.thibault.pro@gmail.com"
          className="inline-block mt-6 px-6 py-3 gradient-bg rounded-xl transition-transform transform hover:scale-105 hover:opacity-90"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}
