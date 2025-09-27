import "./Home.css"

function Home() {
  return (
    
    <div className="home text-center relative">
      <img src="src/assets/sparkles_left.png" alt="sparkles" className="absolute left-80 top-44"/>
      <h1 className="text-[160px] font-extrabold flex justify-center font-montserrat tracking-wide ">
        P
        <span className="relative inline-block w-44 align-middle">
          <img
            src="src/assets/sun.png"
            alt="sun"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </span>
        RT
      </h1>

      <h1 className="text-[160px] font-extrabold font-montserrat tracking-wider">FOLIO</h1>
      <img src="src/assets/sparkles_right.png" alt="sparkles" className="absolute right-70 top-70" />

      <p className="text-[48px] text-white emma-text pl-134 -mt-15 font-bold">Emma Fredriksen</p>
    </div>
  )
}

export default Home


