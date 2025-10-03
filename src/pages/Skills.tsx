function Skills(){
    const skills = [
    { name: "HTML", icon: "src/assets/skills/html.svg" },
    { name: "CSS", icon: "src/assets/skills/css.svg" },
    { name: "JavaScript", icon: "src/assets/skills/javascript.svg" },
    { name: "TypeScript", icon: "src/assets/skills/typescript.svg" },
    { name: "Python", icon: "src/assets/skills/python.svg" },
    { name: "Java", icon: "src/assets/skills/java.svg" },
    { name: "Github", icon: "src/assets/skills/github.svg" },
    { name: "Git", icon: "src/assets/skills/git.svg" },
    { name: "Figma", icon: "src/assets/skills/figma.svg" },
    { name: "Maven", icon: "src/assets/skills/apache.svg" },
    { name: "React", icon: "src/assets/skills/react.svg" },
    { name: "Tailwind", icon: "src/assets/skills/tailwind.svg" },
    { name: "Vite", icon: "src/assets/skills/vite.svg" },
    { name: "VsCode", icon: "src/assets/skills/vscode.svg" },
  ];
    return(
        <div className="pl-15 md:pl-25 pr-10 md:pr-25">
            <div className="skills text-black pt-28">
                <h1 className="title text-4xl md:text-[4rem]">MY SKILLS</h1>
            </div>

        <div className="flex flex-wrap gap-5 md:gap-14 mt-12">
        {skills.map((skill) => (
            <div
            key={skill.name}
            className="flex flex-col items-center group"
            >
            <div
                className="w-20 md:w-32 h-20 md:h-32 rounded-full bg-gray-100 flex items-center justify-center 
                        transition hover:scale-110 shadow-md"
            >
                <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 md:w-15 h-10 md:h-15 filter grayscale group-hover:grayscale-0 transition duration-300"
                />
            </div>
            <p className="mt-3 text-lg font-medium text-gray-700">{skill.name}</p>
            </div>
        ))}
        </div>
        </div>
    )

}

export default Skills;