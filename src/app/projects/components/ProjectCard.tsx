import Image from "next/image";
import Link from "next/link";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGithub,
} from "react-icons/si";
import { Project } from "../../types/Project";

const techIcons: Record<string, React.ReactElement> = {
  "React.js": <SiReact className="text-blue-500" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Next.js": <SiNextdotjs className="text-gray-800" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  SCSS: <SiSass className="text-pink-500" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Redux: <SiRedux className="text-purple-500" />,
  HTML5: <SiHtml5 className="text-orange-500" />,
  CSS3: <SiCss3 className="text-blue-500" />,
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="flex flex-col items-center bg-slate-900 bg-opacity-60 rounded-lg overflow-hidden shadow-lg">
    <div className="relative w-full h-64">
      <Image
        src={project.image || "/default-image.jpg"}
        alt={project.title || "Default Project"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
    <div className="p-4 w-full">
      <h2 id={`project-${project.id}`} className="text-lg font-bold text-white text-center">
        {project.title}
      </h2>
      <p className="text-sm text-gray-300 text-center mb-4">
        {project.description || "No description available."}
      </p>
      {project.challenges && (
        <p className="text-sm text-gray-400 mb-2">
          <strong>Défis : </strong>
          {project.challenges}
        </p>
      )}
      {project.skillsDeveloped && (
        <div className="text-sm text-gray-400 mb-4">
          <strong>Compétences développées : </strong>
          <ul className="list-disc pl-5">
            {project.skillsDeveloped.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <ul className="list-none flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="flex items-center gap-1">
              {techIcons[tech] || <span className="text-gray-400">?</span>}
              <span className="text-white">{tech}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 mt-4">
          {project.url && (
            <Link
              className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-slate-800 transition"
              href={project.url}
              target="_blank"
            >
              Explorer
            </Link>
          )}
          {project.github && (
            <Link
              className="inline-flex items-center justify-center p-2 bg-gray-800 text-white text-sm font-medium rounded-full hover:bg-gray-600 transition"
              href={project.github}
              target="_blank"
            >
              <SiGithub className="text-xl" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);
