import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import { Project } from "../../types/Project";

const techIcons: Record<string, JSX.Element> = {
  "React.js": <SiReact className="text-blue-500" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Next.js": <SiNextdotjs className="text-gray-800" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "SCSS": <SiSass className="text-pink-500" />,
  "MongoDB": <SiMongodb className="text-green-600" />,
  "Redux": <SiRedux className="text-purple-500" />,
};

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

const springTransition = { type: "spring", stiffness: 200, damping: 30 };

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isSelected,
  onClick,
}) => (
  <motion.div
    layout
    onClick={onClick}
    className={`relative rounded-lg  cursor-pointer transition-all duration-300 ${
      isSelected
        ? "z-20 scale-105 h-[30vw] w-[50vw]"
        : "scale-100 h-64 w-20"
    } hover:brightness-110 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white active:brightness-75`}
    transition={springTransition}
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    role="button"
    aria-pressed={isSelected}
    aria-label={`Select project: ${project.title}`}
  >
    <Image
      src={project.image || "/default-image.jpg"}
      alt={project.title || "Default Project"}
      fill
      className="rounded-lg object-cover"
    />
    {isSelected && (
      <motion.div
        className="absolute bottom-0 left-0 w-full p-5 bg-black bg-opacity-70 text-white overflow-y-auto max-h-[30vh] sm:max-h-[40vh]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 id={`project-${project.id}`} className="text-lg font-bold">
          {project.title}
        </h2>
        <p className="text-sm mb-4">
          {project.description || "No description available."}
        </p>
        <div className="flex justify-between items-center">
        <ul className="list-none space-y-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="flex items-center gap-2">
              {techIcons[tech] || <span className="text-gray-400">?</span>}
              <span>{tech}</span>
            </li>
          ))}
        </ul>
        {project.url && (
          <Link
          href={`/projects/${project.id}`}>
          <motion.div
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="inline-block mt-4 px-4 py-2 gradient-bg text-white text-sm font-medium rounded hover:bg-slate-800 transition"
          >
            More details
          </motion.div>
        </Link>
        )}
        </div>
      </motion.div>
    )}
  </motion.div>
);
