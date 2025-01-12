"use client";

import { projectsData } from "../../../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsContainer() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl mb-6">Mes projets</h2>
      <div className="w-full flex flex-wrap h-max items-center justify-center gap-12">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
