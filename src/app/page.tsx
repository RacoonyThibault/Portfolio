import About from "./projects/components/About";
import Contact from "./projects/components/Contact";
import Hero from "./projects/components/Hero";
import ProjectsContainer from "./projects/components/ProjectsContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <ProjectsContainer />
      <Contact />
    </div>
  );
}
