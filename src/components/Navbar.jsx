function Navbar() {
  return (
    <nav className="sticky top-6 z-50 rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-6 shadow-lg shadow-blue-500/5 backdrop-blur-md flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-wide">
        <a href="#home">
          <span className="text-blue-500">AJAY</span> SUTHARAHAN
        </a>
      </h1>

      <div className="hidden md:flex gap-10 text-sm font-semibold text-white/70">
        <a href="#home" className="hover:text-blue-400 transition">HOME</a>
        <a href="#portfolio" className="hover:text-blue-400 transition">DESIGN</a>
        <a href="#experience" className="hover:text-blue-400 transition">EXPERIENCE</a>
        <a href="#featured-projects" className="hover:text-blue-400 transition">PROJECTS</a>
        <a href="#contact" className="hover:text-blue-400 transition">CONTACT</a>
      </div>
    </nav>
  )
}

export default Navbar