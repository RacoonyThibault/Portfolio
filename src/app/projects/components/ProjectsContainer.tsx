"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../../../data/projectsData";
import { Project } from "../../types/Project";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const ProjectsContainer: React.FC = () => {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    if (openProject?.id === project.id) {
      setOpenProject(null);
    } else {
      setOpenProject(project);
    }
  };

  return (
    <div className="relative flex items-center w-full h-[80vh] mt-10 overflow-hidden bg-inherit sm:h-[70vh] md:h-[60vh] lg:h-[70vh]">
      {openProject && (
        <>
          <button
            onClick={() =>
              setOpenProject(
                projectsData[
                  (openProject.id - 1 + projectsData.length) % projectsData.length
                ]
              )
            }
            className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-700 transition"
            aria-label="Previous Project"
          >
            <AiOutlineLeft size={24} />
          </button>
          <button
            onClick={() =>
              setOpenProject(
                projectsData[(openProject.id + 1) % projectsData.length]
              )
            }
            className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-700 transition"
            aria-label="Next Project"
          >
            <AiOutlineRight size={24} />
          </button>
        </>
      )}
      <div className="h-full  flex justify-center items-center w-full">
        <div
          className={`flex h-full transition-transform duration-700 ${
            openProject ? "gap-8 sm:gap-10 md:gap-20" : "gap-4 sm:gap-6 md:gap-8"
          }`}
          style={{
            transform: openProject
              ? `translateX(calc(50vw - ${
                  openProject.id * (window.innerWidth < 640 ? 40 : 18)
                }vw - 30vw))`
              : "translateX(0)",
          }}
        >
          {projectsData.map((project: Project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className={`relative overflow-hidden rounded-lg cursor-pointer ${
                openProject?.id === project.id
                  ? "h-[50vw] w-[70vw] sm:h-[40vw] sm:w-[60vw] md:h-[35vw] md:w-[50vw]"
                  : "h-[20vh] w-[30vw] sm:h-[25vh] sm:w-[20vw] md:h-[25vh] md:w-[15vw]"
              } transition-all duration-700`}
            >
              <div
                style={
                  openProject?.id !== project.id
                    ? {
                        backgroundColor: openProject?.bgColor
                          ? `${openProject.bgColor}99`
                          : "transparent",
                      }
                    : undefined
                }
                className={`absolute top-0 w-full h-full z-10 ${
                  openProject?.id === project.id
                    ? "bg-opacity-0"
                    : "bg-opacity-50"
                } hover:bg-opacity-0 transition duration-700`}
              ></div>
              <ProjectCard
                project={project}
                isSelected={openProject?.id === project.id}
                onClick={() => handleCardClick(project)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
