// src/components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="absolute pt-16 top-0 left-0 w-full py-4 z-50 text-[24px]">
      <div className="max-w-6xl mx-auto flex justify-center gap-20 space-x-8">
        <a href="/" className="transition-colors">About me</a>
        <a href="/about" className="transition-colors">Skills</a>
        <a href="/contact" className="transition-colors">Projects</a>
        <a href="/contact" className="transition-colors">Work</a>
      </div>
    </nav>
  );
};

export default Navbar;
