function Navbar() {
  return (
    <nav className="rounded-3xl border border-white/10 bg-white/[0.04] shadow-lg shadow-blue-500/5 px-8 py-6 backdrop-blur-md flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-wide">
        <span className="text-blue-500">AJAY</span> SUTHARAHAN
      </h1>

      <div className="hidden md:flex gap-10 text-sm font-semibold text-white/70">
        <a href="#home" className="hover:text-blue-400 transition">HOME</a>
        <a href="#experience" className="hover:text-blue-400 transition">EXPERIENCE</a>
        <a href="#projects" className="hover:text-blue-400 transition">PROJECTS</a>
        <a href="#about" className="hover:text-blue-400 transition">ABOUT</a>
        <a href="#contact" className="hover:text-blue-400 transition">CONTACT</a>
      </div>
    </nav>
  )
}

export default Navbar