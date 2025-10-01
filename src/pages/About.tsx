function About() {
  return (
    <div className="relative pt-20">
      <img
        src="src/assets/about/silver_stars.png"
        alt="silver stars"
        className="absolute top-0 right-0"
      />
      <h1 className="title text-right pr-[21%] pt-1">ABOUT ME</h1>
      <div className="flex items-start gap-8 pl-25">
        <img
          src="src/assets/about/Tv.png"
          alt="picture of Emma"
          className="mt-[-3rem]"
        />
        <p className="text-[#702D00] text-xl font-medium leading-relaxed max-w-md pt-6 ">
          Hey there! I’m a 20-year-old Computer Science student passionate
          about creating solutions that make a real impact. I especially enjoy
          building projects that are both fun and useful.
          <br />
          <br />
          I chose this path because I love seeing my creations in action and
          knowing they make a difference for others.
          <br />
          <br />
          My main interests are in web development and user-centered design,
          where I can combine problem-solving with creativity. I’m constantly
          exploring new technologies and refining my skills through both
          academic projects and personal initiatives.
        </p>
      </div>
    </div>
  );
}

export default About;
