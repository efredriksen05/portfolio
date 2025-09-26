// src/components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="absolute pt-8 top-0 left-0 w-full py-4 z-50 text-2xl font-extrabold">
      <div className="max-w-6xl mx-auto flex justify-center space-x-8">
        <a href="/" className="hover:text-gray-200 transition-colors">About me</a>
        <a href="/about" className="hover:text-gray-200 transition-colors">Skills</a>
        <a href="/contact" className="hover:text-gray-200 transition-colors">Projects</a>
        <a href="/contact" className="hover:text-gray-200 transition-colors">Work</a>
      </div>
    </nav>
  );
};

export default Navbar;
