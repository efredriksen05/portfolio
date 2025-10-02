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
        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-10 h-10 fill-current cursor-pointer"
                        >
                        <path
                            d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 
                                20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 
                                20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 
                                17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 
                                6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 
                                9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 
                                4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 
                                4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 
                                5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 
                                7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 
                                16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 
                                21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 
                                9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z"
                        ></path>
                        </svg>
        </li>
    ))}
    </ul>


    <div className="absolute top-[85%] left-[7%] w-[70%] text-left">
    {activeProject ? (
        <p className="text-[#702D00] italic text-xl">{activeProject.skills}</p>
    ) : (
        <p className="text-gray-500 italic text-xl">
        Explore projects by hovering over them.
        </p>
    )}
    </div>
    </div>
  );
}

export default Projects;
