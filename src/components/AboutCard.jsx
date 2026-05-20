import BentoCard from "./BentoCard"

function AboutCard({className = ""}) {
  return (
    <BentoCard className={className}>
      <h3 className="mb-5 text-2xl font-bold">About Me</h3>

      <p className="leading-relaxed text-white/70">
        I’m a Computer Science student at the University of Ottawa passionate about building AI systems, 
        full-stack applications, and thoughtful digital experiences. Through internships, research, 
        hackathons, and personal projects, I’ve worked on everything from machine learning and 
        analytics to mobile and backend systems.
      </p>

      <p className="mt-5 leading-relaxed text-white/70">
        Outside academics, I enjoy experimenting with new technologies, 
        building side projects, and continuously learning how software and design can 
        solve real problems.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-sm font-semibold text-blue-400">AI Systems</p>
        <p className="mt-1 text-sm text-white/55">ML, data, and intelligent tools</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-sm font-semibold text-blue-400">Full-Stack</p>
        <p className="mt-1 text-sm text-white/55">Frontend, backend, and databases</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-sm font-semibold text-blue-400">Product Design</p>
        <p className="mt-1 text-sm text-white/55">Clean, usable interfaces</p>
      </div>
    </div>

    </BentoCard>
  )
}

export default AboutCard