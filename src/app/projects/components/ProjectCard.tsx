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
  <div className="relative rounded-lg min-w-72 w-[40vw] min-h-56 h-[30vw] overflow-hidden">
    <Image
      src={project.image || "/default-image.jpg"}
      alt={project.title || "Default Project"}
      fill
      className="rounded-lg object-cover"
    />
    <div className="z-10 absolute top-0 w-full hover:bottom-0 hover:top-auto">
      <div className="min-w-72 w-[40vw] min-h-56 h-[30vw]"></div>
      <div className="bg-slate-900 bg-opacity-60 p-4">
        <h2 id={`project-${project.id}`} className="text-lg font-bold">
          {project.title}
        </h2>
        <p className="text-sm mb-4">
          {project.description || "No description available."}
        </p>
        <div className="flex justify-between items-center">
          <ul className="list-none">
            {project.technologies.map((tech) => (
              <li key={tech} className="flex items-center gap-1">
                {techIcons[tech] || <span className="text-gray-400">?</span>}
                <span>{tech}</span>
              </li>
            ))}
          </ul>
          {project.url && (
            <Link
              className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-slate-800 transition"
              href={project.url}
              target="_blank"
            >
              Explorer
            </Link>
          )}
        </div>
      </div>
    </div>
    {/* {isSelected && (
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
            <Link href={`/projects/${project.id}`}>
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
    )} */}
  </div>
);
