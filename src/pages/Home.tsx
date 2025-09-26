import "./Home.css"

function Home() {
  return (
    
    <div className="home text-center relative">
      <h1 className="text-[160px] font-bold flex justify-center">
        P
        {/* Container for O-en */}
        <span className="relative inline-block w-44 align-middle">
          {/* Sola fyller containeren */}
          <img
            src="src/assets/sun.png"
            alt="sun"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </span>
        RT
      </h1>

      <h1 className="text-[160px] font-bold">FOLIO</h1>

      <p className="text-4xl text-white emma-text">Emma Fredriksen</p>
    </div>
  )
}

export default Home


