import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Desktop-nav */}
      <nav className="hidden md:block absolute pt-[4vw] top-0 left-0 w-full py-4 z-50 text-[24px]">
        <div className="max-w-6xl mx-auto flex justify-center gap-[5vw] space-x-8 text-[#AA1515] font-extrabold">
          <a href="#about" className="transition-colors">About me</a>
          <a href="#skills" className="transition-colors">Skills</a>
          <a href="#projects" className="transition-colors">Projects</a>
          <a href="#work" className="transition-colors">Work</a>
        </div>
      </nav>

      {/* Hamburger */}
      <button
        className="absolute bg-[#AA1515] rounded-2xl flex items-center justify-center w-[15vw] h-[15vw] top-15 right-6 z-[60] text-[2rem] text-white md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>



      {/* Mobile-nav */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-[30vw] bg-[#AA1515] z-50 flex flex-row items-center justify-center gap-8 text-[12px]">
          <a href="/about" className=""onClick={() => setOpen(false)}>About me</a>
          <a href="/skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="/project" onClick={() => setOpen(false)}>Projects</a>
          <a href="/work" onClick={() => setOpen(false)}>Work</a>
        </div>
      )}
    </div>
  );
}
