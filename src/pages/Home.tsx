import "./Home.css"

function Home() {
  return (
    
    <div className="home text-center relative pt-[5rem] md:pt-[10rem]">
      <img src="src/assets/sparkles_left.png" alt="sparkles" 
        className="absolute left-[5%] top-[25%] md:left-[23%] md:top-[20%] w-[70px] md:w-[100px]" />
      <h1 className="text-[7rem] md:text-[11rem] gap-0 md: ml-3 mr-3 font-extrabold flex justify-center font-montserrat tracking-wide ">
        P
        <span className="relative inline-block w-[7rem] md:w-[12rem] align-middle">
          <img
            src="src/assets/sun.png"
            alt="sun"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </span>
        RT
      </h1>

      <h1 className="text-[7rem] md:text-[11rem] font-extrabold font-montserrat tracking-wider ml-6 mr-6">FOLIO</h1>
      <img src="src/assets/sparkles_right.png" alt="sparkles" className="relative left-[10rem] top-[-10rem] md:left-[25%] md:top-[-10rem] w-[60px] md:w-[100px]" />

      <p className="relative text-[2rem] md:text-[4rem] text-white emma-text left-[20%] top-[-5rem] md:left-[22%] md:top-[-9rem] font-bold">Emma Fredriksen</p>
    </div>
  )
}

export default Home


