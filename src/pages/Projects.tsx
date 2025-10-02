import { useState } from "react";

function Projects() {

    type Project = {
    title: string;
    image: string;
    link: string;
    skills: string;
    };

  const projects = [
    { 
      title: "My Website",
      image: "src/assets/project/my_website.png",
      link: "https://github.com/efredriksen05",
      skills: "React, TypeScript, Tailwind, Vite"
    },
    {
      title: "Doodle",
      image: "src/assets/project/doodle.png",
      link: "https://github.com/efredriksen05/Doodle",
      skills: "Java, JavaFX"
    },
    {
      title: "Realfagskjelleren",
      image: "src/assets/project/realfagskjelleren.png",
      link: "https://github.com/appKom/fusilli",
      skills: "Astro, Tailwind, Strapi"
    }
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return (
    <div className="h-[60rem] pt-50 relative">
      <h1 className="title text-right pl-25 pr-[22%]">PROJECTS</h1>
      
      <div className="relative w-3xl mt-[-25rem] float-left">
        {/* Frame */}
        <img 
          src="src/assets/project/frame_with_ribbon.png" 
          alt="frame" 
          className="w-full relative z-10"
        />

        {/* Picture of project */}
        {activeProject && (
          <img 
            src={activeProject.image} 
            alt={activeProject.title} 
            className="absolute top-[55%] left-[19%] w-[70%] h-auto rounded-md z-0"
          />
        )}
      </div>

    {/* List of projects*/}
    <ul className="absolute text-[#702D00] text-3xl/15 font-medium font-kufam right-[13%] top-[35%] space-y-4">
    {projects.map((project, index) => (
        <li
        key={index}
        onMouseEnter={() => setActiveProject(project)}
        onMouseLeave={() => setActiveProject(null)}
        className="cursor-pointer hover:text-[#ffc132] transition-colors flex justify-between items-center gap-50 group"
        >
        <a href={project.link} >{project.title}</a>
        <img 
            src="src/assets/skills/github.svg" 
            alt="github logo" 
            className="w-10 h-10 transition group-hover:fill-[#702D00]" 
        />
        </li>
    ))}
    </ul>


    <div className="absolute top-[85%] left-[7%] w-[70%] text-left">
    {activeProject ? (
        <p className="text-[#702D00] italic text-xl">{activeProject.skills}</p>
    ) : (
        <p className="text-gray-500 italic text-xl">
        Explore project by hovering over them.
        </p>
    )}
    </div>
    </div>
  );
}

export default Projects;
