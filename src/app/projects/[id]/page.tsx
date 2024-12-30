import { notFound } from "next/navigation";
import { projectsData } from "../../../data/projectsData";

interface ProjectDetailsProps {
  params: { id: string };
}

const ProjectDetails = ({ params }: ProjectDetailsProps) => {
  const project = projectsData.find((proj) => proj.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-gray-700">{project.description}</p>
      <ul className="mt-6 space-y-2">
        {project.technologies.map((tech) => (
          <li key={tech} className="flex items-center gap-2">
            <span>{tech}</span>
          </li>
        ))}
      </ul>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-4 py-2 rounded-md gradient-bg transition-transform transform hover:scale-105 hover:opacity-90"
        >
          Visit Project
        </a>
      )}
    </div>
  );
};

export default ProjectDetails;
