function About() {
  return (
    <div className="relative pl-10 pt-20 sm:pt-20 px-4 sm:px-8 lg:px-20">
      <img
        src="src/assets/about/silver_stars.png"
        alt="silver stars"
        className="absolute top-0 right-[-2rem] md:right-0 w-36 md:w-auto"
      />
      <h1 className="text-4xl md:text-[4rem] title text-left md:text-right pl-5 md:pr-[18%] pt-1">ABOUT ME</h1>
      <div className="flex flex-col md:flex-row items-start gap-8 pl-6">
        <img
          src="src/assets/about/Tv.png"
          alt="picture of Emma"
          className="mt-[-3rem] order-2 pt-10 md:order-1"
        />
        <p className="order-1 md:order-2 text-[#702D00] text-sm md:text-xl font-medium leading-relaxed max-w-md pt-6">
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
